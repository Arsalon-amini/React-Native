import { AsyncStorage } from 'react-native'; 
import moment from 'moment'; 

const prefix = 'cache'; 
const expiryInMinutes = 5; 

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item)); 
        
    } catch (error) {
        console.log(error); 
    }
}

const isExpired = (item) => {
    const now = moment(Date.now()); 
    const storedTime = moment(item.timestamp); 
    return now.diff(storedTime, 'minutes') > expiryInMinutes; 
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key); 
        const item = JSON.parse(value); 

        if(!item) return null; //item doesn't exist in cache

        if (isExpired){
            await AsyncStorage.removeItem(prefix + key); //clean cache
            return null; 
        }

    } catch (error) {
        console.log(error); 
    }
}

return item.value;


export default {
    store,
    get
}