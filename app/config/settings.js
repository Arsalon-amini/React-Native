import Constants from 'expo-constants'; 

const settings = { 
    dev: {
        apiUrl: 'http://192.168.1.211:9000/api'
    },
    staging: {
        apiUrl: 'http://192.168.1.211:9000/api'
    },
    production: {
        apiUrl: 'http://192.168.1.211:9000/api'
    }
}

const getCurrentSettings = () => {
    if(__DEV__) return settings.dev; //global variable by RN, run app locally, variable is true
    if(Constants.manifest.releaseChannel === 'staging') return settings.staging; //can build app for channel like staging or production
    return settings.prod; 
}

export default getCurrentSettings(); 