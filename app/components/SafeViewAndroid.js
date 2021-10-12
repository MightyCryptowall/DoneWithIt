import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  AndroidSafeArea: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    paddingTop: Constants.statusBarHeight
  }
});