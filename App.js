import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1})); //storge string value
      const value = AsyncStorage.getItem('person'); //returns string 
      const person = JSON.parse(value); //get actual person obj

      console.log(person); 
  
    } catch (error) {
      console.log(error); //log to sentry in real app
    }
     
  }

  demo(); 
  return (
   null
  )
}

