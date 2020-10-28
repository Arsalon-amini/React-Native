import React from "react";
import { View, Text } from 'react-native';

export default function App() {
  return (
   <View
   style={{
     flex:1,
     justifyContent: "center",
     alignItems: "center"
   }}
   >
     <Text
     style={{
       fontSize: 30,
       //fontFamily: "roboto",
       fontStyle: "italic",
       fontWeight: "bold",
       color: "blue",
       textTransform: "capitalize"
     }}
     > I love React Native! </Text>
   </View>
  )
}



