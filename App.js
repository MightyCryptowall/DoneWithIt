import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SafeViewAndroid from "./app/components/SafeViewAndroid";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  console.log("hello");
  return (

   
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
       <StatusBar
     backgroundColor="black"
     style="light"
   />
      <WelcomeScreen/>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
