import { useContext } from "react"; 
import jwtDecode from 'jwt-decode'; 

import AuthContext from "./context"; 
import authStorage from './storage'; 


export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext); //Context (virtual memory)

    const logIn = (authToken) => { 
        const user = jwtDecode(authToken); 
        setUser(user); //Context (virtual memory)
        authStorage.storeToken(authToken);  //secureStorage (device memory)
    }
    const logOut = () => { 
        setUser(null); 
        authStorage.removeToken(); //secureStorage (device memory)
    }

    return { user, logIn, logOut }; 
}