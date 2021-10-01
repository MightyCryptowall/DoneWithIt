import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.SafeAreaView]}>
      <Button 
        color= "orange"
        title="Click Me" 
        onPress={() => 
          Alert.prompt("My title", "My message", text => console.log(text))} 
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
});
