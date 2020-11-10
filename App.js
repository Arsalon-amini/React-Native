import React from 'react';
import { Text, Button } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Screen from './app/components/Screen'; 
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator/> 
    </NavigationContainer>
  )
}

