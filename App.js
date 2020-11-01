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
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName ] = useState(''); 

  return (
    <Screen> 
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  )
}

