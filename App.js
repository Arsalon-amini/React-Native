import React from "react";
import { View } from "react-native";


export default function App() {
  return (
    <View style={{ backgroundColor: '#fff',  flex: 1,
     flexDirection: "row", //primary axis - horizontal
     justifyContent: "center", //primary axis (center)
     alignItems:"center" //secondary axis - vertical 
     }}
     > 

    <View 
      style={{
        backgroundColor: 'dodgerblue', 
        width: 100, 
        height: 100, 
        alignSelf: "flex-start"
      }}
        />
     <View 
      style={{
        backgroundColor: 'gold', 
        width: 100, 
        height: 200,
        alignSelf: "flex-end"
       }}
        />
          <View 
      style={{
        backgroundColor: 'tomato', 
        width: 100, 
        height: 300, }}
        />
    </View>
  );
}

