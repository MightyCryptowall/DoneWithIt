import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error)
    }
  }

  return <Screen>
    <Button title="Select Image" onPress={selectImage} />
    <Image source={{ uri: imageUri }} style={{width: 200, height: 200}} />
    <ImageInput imageUri={imageUri}/>
  </Screen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 50,
    backgroundColor: "#111",
  },
});
