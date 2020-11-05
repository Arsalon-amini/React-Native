import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'; 

import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput'


export default function App() {
  const [imageUri, setImageUri] = useState(); 

  const requestPermissions = async() => {
      const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
      if(!granted)
          alert("You need to enable permissions to access photo library") 
  }
  useEffect(() => {
      requestPermissions(); 
  }, [])

  const selectImage = async () => {
      try {
          const result = await ImagePicker.launchImageLibraryAsync(); 
          if(!result.cancelled)
              setImageUri(result.uri);  
      } catch (error) {
          console.log('Error reading an Image'); 
      }
  }
  return (
    <Screen>
      <Button title="select image" onPress={selectImage} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  )
}

