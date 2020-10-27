import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, Button } from "react-native";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
     <Button 
     title="click me" onPress={() => alert('button tapped')}/>
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
