import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, Button, Platform, StatusBar } from "react-native";

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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
