import client from './client'; 

const register = (push) => 
    client.post('/expoPushTokens', { token: pushToken }); 

export default {
    register
}