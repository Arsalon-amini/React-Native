import React, { useState } from 'react';
import { Button } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import Screen from './app/components/Screen';

export default function App() {

  const showNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Dont forget your order!'
      },
      trigger: {
        seconds: 4,
      },
    });


  };
  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  )
}

