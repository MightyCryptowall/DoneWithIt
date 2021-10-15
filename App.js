import React, { useState } from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";


export default function App() {

  return (
   <LoginScreen />
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
