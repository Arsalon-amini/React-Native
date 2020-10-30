import React from "react";
import ListItem from "./app/components/ListItem";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Icon from './app/components/Icon';
import Screen from './app/components/Screen'; 


export default function App() {
  return (
    <Screen> 
      <Icon 
      name="email"
      size={50}
      backgroundColor= "red"
      iconColor= "white"
      />
    </Screen>
  )
}

