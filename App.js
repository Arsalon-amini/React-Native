import React, { useState } from "react";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Icon from './app/components/Icon';
import Screen from './app/components/Screen'; 
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput, Text } from 'react-native';

export default function App() {
  const [firstName, setFirstName ] = useState(''); 

  return (
    <Screen> 
      <Text>{firstName}</Text>
      <TextInput 
      secureTextEntry={true}
      clearButtonMode='always'
      keyboardType="numeric"
      maxLength={5}
      onChangeText={text => setFirstName(text)}
      placeholder="First Name"
      style={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      }}
      />
    </Screen>
  )
}

