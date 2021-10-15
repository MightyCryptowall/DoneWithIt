import React, { useState } from "react";
import { StyleSheet } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {

  return (
    <ListingEditScreen />
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
