import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
    NetInfo.fetch().then(netInfo => console.log(netInfo)); 
  return (
    null
  )
}

