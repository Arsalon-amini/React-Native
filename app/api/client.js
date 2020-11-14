import { create } from 'apisauce'; 
import cache from '../utility/cache'; 
import authStorage from '../auth/storage'; 

const apiClient = create({
    baseURL: 'http://192.168.1.211:9000/api'
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken(); 
    if(!authToken) return; 
    request.headers["x-auth-token"] = authToken; 
}); 

const get = apiClient.get; 
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig); 

    if(response.ok) {
        cache.store(url, response.data); //caching every get request 
        return response; 
    }

    const data = await cache.get(url); //get data from cache
    return data ? { ok: true, data } : response; //mock 200 server response w/ cache data (clientside), or server response (w/ ok = false details, error details)
}

export default apiClient; 
