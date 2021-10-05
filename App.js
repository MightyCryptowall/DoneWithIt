import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <Text
       style={{
        //  fontFamily: "Roboto", //Courier for ios and Roboto for androidd
         fontSize: 30,
         fontStyle: "italic",
         fontWeight: "600",
         color: "tomato",
         textTransform: "capitalize",
        //  textDecorationLine: "line-through",
        textAlign: "center",
        lineHeight: 35
       }}
      >I love React Native! This is my first react native app! Here's some more text.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#fff",
  },
});
