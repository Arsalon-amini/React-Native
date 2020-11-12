import React from 'react';
import NetInfo, { useNetInfo }  from '@react-native-community/netinfo';
import { Button, View } from 'react-native';

export default function App() {
  const netInfo = useNetInfo(); //complexity hidden (subscribing and unsubscribing)


  return (
    <Button disabled={!netInfo.isInternetReachable} />
  )
}

