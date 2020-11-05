import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'; 
import * as Permissions from 'expo-permissions'; 

import Screen from './app/components/Screen';


export default function App() {
  const requestPermission = async() => {
    const result = Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    if(!result.granted)
      alert("You need to enable permissions to access library")
  }

  useEffect(() => {
    requestPermission(); //cannot call async fn directly
  }, [])

  return (
      <Screen></Screen>
  )
}

