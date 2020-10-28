import React from "react";
import { View } from 'react-native';

export default function App() {
  return (
   <View 
   style={{
     flex: 1, //default "column" y-axis align
     justifyContent: "center", //align items on main axis in center (y-axis)
     alignItems: "center" //align items along x-axis (secondary)
   }}
   > 
   <View
   style={{
     backgroundColor: "dodgerblue",
     width: 100,
     height: 100,
     borderWidth: 10,
     borderColor: "royalblue",
     borderRadius: 50 //round edges (1/2 width makes circle)
   }}
   ></View>

   </View>
  )
}



