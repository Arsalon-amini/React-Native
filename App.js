import React from "react";
import { View } from "react-native";


export default function App() {
  return (
    <View style={{ backgroundColor: '#fff',  flex: 1,
     flexDirection: "row", //horizontal
     justifyContent: "center", // main 
     alignItems: "center"
     }}> 

    <View style={{backgroundColor: 'dodgerblue', flex: .5, }}/>
    <View style={{backgroundColor: 'gold', flex: .5 }}/>
    <View style={{backgroundColor: 'tomato', flex: .5 }}/>

    </View>
  );
}

