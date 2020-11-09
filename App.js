import React from 'react';
import { Text, Button } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 

import Screen from './app/components/Screen'; 
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Link = () => {
  const navigation = useNavigation(); //get access to navigation object

  return (
  <Button 
    title="Click"
    onPress = {()=> navigation.navigate("TweetDetails")} />
  )
}

const Tweets = ( { navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })} //second arg is obj (parameter)
    />
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
        <Text>Tweet Details {route.params.id} </Text>
      </Screen>
)
const Account = () => (
  <Screen>
      <Text>Account</Text>
  </Screen>
)

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator 
      screenOptions= {{
        headerStyle: { backgroundColor: "dodgerblue"},
        headerTintColor: "white",
      }}
  >
    <Stack.Screen 
    name="Tweets" 
    component={Tweets}
    /> 
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={
        {
          headerStyle: { backgroundColor: "tomato"},
          headerTintColor: "white",
        }
      }
      /> 
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator}/>
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator /> 
    </NavigationContainer>
  )
}

