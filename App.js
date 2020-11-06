import React from 'react';
import { Text } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-native/native'; 

import Screen from './app/components/Screen'; 

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
        <Text>Tweet Details </Text>
      </Screen>
)

const Stack = createStackNavigator();  //has navigator/screen (routes) properties act like components 
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets}/> 
    <Stack.Screen name="TweetDetails" component={TweetDetails}/> 
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator /> 
    </NavigationContainer>
      
  )
}

