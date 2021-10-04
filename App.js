import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SafeViewAndroid from "./components/SafeViewAndroid";

export default function App() {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row", // horizontal
          justifyContent: "center", // main
          alignItems: "center", // secondary
          flexWrap: "wrap",
          alignContent: "center"
        }}
      >
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 300,
          }}
        />
        <View
          style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
       />
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "grey",
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: "greenyellow",
            width: 100,
            height: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
