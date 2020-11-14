import React, { useEffect, useState } from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode'; 
import { AppLoading } from 'expo'; 

import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState(); 
  const [isReady, setIsReady] = useState(false); 

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if(!token) return; 
    setUser(jwtDecode(token)); 
  }

  if(!isReady) return (
    <AppLoading 
        startAsync={restoreToken} //when app loads startAsync fn called
        onFinish={()=> setIsReady(true)} //called when startAsync fn execution finished
    /> )

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator /> }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

