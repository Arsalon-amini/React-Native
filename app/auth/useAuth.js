import { useContext } from "react"; 
import jwtDecode from 'jwt-decode'; 

import AuthContext from "./context"; 
import authStorage from './storage'; 


export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext); //Context

    const logIn = (authToken) => { 
        const user = jwtDecode(authToken); 
        setUser(user); 
        authStorage.storeToken(authToken);  //secureStorage 
    }
    const logOut = () => { 
        setUser(null); 
        authStorage.removeToken(); //secureStorage 
    }

    return { user, logIn, logOut }; 
}