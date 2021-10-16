import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";


export default function App() {

  return (
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: "#111",
  },
});
