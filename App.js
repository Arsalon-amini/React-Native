import React, { useState } from "react";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Icon from './app/components/Icon';
import Screen from './app/components/Screen'; 
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

import { Switch } from 'react-native';

export default function App() {
  const [isNew, setIsNew ] = useState(false); 

  return (
    <Screen> 
      <Switch value={isNew} onValueChange={newValue => setIsNew(newValue)} />
    </Screen>
  )
}

