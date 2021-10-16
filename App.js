import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const requestPermission = async () => {
    // const { granted } = await Permissions.askAsync(
    //   Permissions.MEDIA_LIBRARY,
    //   Permissions.LOCATION_BACKGROUND
    // );
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: "#111",
  },
});
