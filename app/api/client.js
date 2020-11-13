import { create } from 'apisauce'; 
import cache from '../utility/cache'; 

const apiClient = create({
    baseURL: 'http://192.168.1.211:9000/api'
});

const get = apiClient.get; 
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig); 

    if(response.ok) {
        cache.store(url, response.data); //caching every get request (in app, create black/white list cache certain requests only)
        return response; 
    }

    //if reaches here, server failed / offline
    const data = await cache.get(url); //get data from cache
    return data ? { ok: true, data } : response; //return simulated 200 response with cache data, or original response (w/ error details)
}

export default apiClient; 
