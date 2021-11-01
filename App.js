import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: "#111",
  },
});
