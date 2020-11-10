import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = () => {
    const data = new FormData(); //apisauce/axios will set content type header from application/json to multipart/form-data when calling server (send images, etc.)
    data.append('title', listing.title);  //create key-value pairs in obj
    data.append('price', listing.price); 
    data.append('categoryId', listing.catagory.value); 
    data.append('description', listing.description); 

    listing.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image //string of image uri 
        }))

        if(listing.location)
        data.append('location', JSON.stringify(listing.location)); 
        
        return client.post(endpoint); //send to server, returns a promise 
}

export default { 
    getListings,
}