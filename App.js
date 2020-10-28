import React from "react";
import { View } from 'react-native';

export default function App() {
  return (
   <View 
   style={{
     flex: 1, //default "column" y-axis align
     justifyContent: "center", //align items on main axis in center (y-axis)
     alignItems: "center", //align items along x-axis (secondary)
   }}
   > 
   <View
   style={{
     backgroundColor: "dodgerblue",
     width: 100,
     height: 100,
     padding: 25,
   }}
   >
     <View
     style={{
       backgroundColor: "gold",
       width: 50,
       height: 50
     }}
     ></View>


   </View>
   </View>
  )
}



