import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import AppNavigator from './app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

