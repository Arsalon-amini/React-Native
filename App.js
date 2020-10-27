import React from "react";
import { 
  StyleSheet, Text, View, 
  Image, SafeAreaView, 
  TouchableOpacity, 
  Alert, Button, Platform, Dimensions,
  StatusBar
 } 
  from "react-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'; 

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style = {styles.container}>
      <View style={{
        backgroundColor: 'dodgerBlue',
        width: 150,
        height: landscape ? "100%" : "30%",
      }} />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
  },
});
