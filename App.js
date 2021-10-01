import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <Text>Hello React Native!</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}/>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
