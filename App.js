import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'; 

import Screen from './app/components/Screen';


export default function App() {
  const requestPermission = async() => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted)
      alert("You need to enable permissions to access library")
  }

  useEffect(() => {
    requestPermission(); //cannot call async fn directly
  }, [])

  return (
      <Screen> </Screen>
  )
}

