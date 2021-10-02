import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  View,
} from "react-native";
import SafeViewAndroid from "./components/SafeViewAndroid";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
 let dimension = useDimensions();
 let orientation = useDeviceOrientation();
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: orientation.landscape ? "100%":"30%"
      }}>
        <Button title="hello" onPress={() =>  console.log(dimension.screen,orientation)}/>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
