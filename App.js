import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'; 
import * as Permissions from 'expo-permissions'; 

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';


export default function App() {
  const [imageUri, setImageUri] = useState()


  const requestPermission = async() => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if(!granted)  
      alert("You need to enable permissions to access library")
  }
  useEffect(() => {
    requestPermission(); //cannot call async fn directly
  }, [])

  const selectImage= async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync(); 
      if(!result.cancelled)
        setImageUri(result.uri); 
    } catch (error) {
      console.log('Error reading and Image'); 
    }
  }

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image source={{uri: imageUri}} style={{width: 200, height: 200 }}/>
    </Screen>
  )
}

