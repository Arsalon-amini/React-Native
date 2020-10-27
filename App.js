import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, Button } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={[containerStyle, styles.container ]}>
     <Button 
     title="click me" onPress={() => 
     Alert.alert("Custom prompt", "Is it easy to code in React Native?", [{text: 'yes', onPress: () => console.log("pressed")}])}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "red" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
