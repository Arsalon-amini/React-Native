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
     shadowColor: "grey",
     shadowOffset: { width: 10, height: 10 } , //position or angle of shadow
     shadowOpacity: 1 //how dark shadow is 
     
   }}
   ></View>
   </View>
  )
}



