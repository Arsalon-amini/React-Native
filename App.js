import React from 'react';
import { Text, Button } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

import Screen from './app/components/Screen'; 

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

const Stack = createStackNavigator();  //has navigator/screen (routes) properties act like components 
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets}/> 
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={
        {
          headerStyle: { backgroundColor: "tomato"},
          headerTintColor: "white",
          headerShown: false
        }
      }
      /> 
  </Stack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator /> 
    </NavigationContainer>
      
  )
}

