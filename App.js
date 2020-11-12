import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function App() {

  //call in ComponentDidMount
    const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo)); //called everytime a change in network 

  //call in Component will unMount 
  unsubscribe(); 
  return (
    null
  )
}

