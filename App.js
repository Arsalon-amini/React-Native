import React from 'react';
import { Text, Button } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
        <Text>Tweet Details {route.params.id} </Text>
      </Screen>
)
const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: 'white',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black'
      }}
  >
    <Tab.Screen
      name="Feed" 
      component={Tweets}
      options={{
        tabBarIcon: ( { size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>
      }}
      />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/> 
    </NavigationContainer>

  )
}

