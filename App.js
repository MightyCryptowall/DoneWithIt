import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    // <ListingsScreen/>
    // <AccountScreen />
    // <MessagesScreen />
    //   {/* <WelcomeScreen /> */}
    //  {/* <ListingDetailsScreen/> */}
    //  {/* <ViewImageScreen /> */}
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
      {/* <Text>{firstName}</Text>
      <TextInput
        // keyboardType = "numeric"
        // clearButtonMode="always" //only works on ios
        secureTextEntry
        onChangeText={text => setFirstName(text)}
          placeholder="First Name"
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
      /> */}
    </Screen>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // paddingTop: 50,
    backgroundColor:"#111",
  },
});
