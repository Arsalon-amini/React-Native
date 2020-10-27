import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, Button } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
     <Button 
     title="click me" onPress={() => Alert.alert("Custom Alert", "Is it easy to code in React Native?", [
       {text: "yes", onPress: () => console.log("yes clicked")},
       {text: "No", onPress: () => console.log("no clicked")}
     ])}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
