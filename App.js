import React, { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import {
  createNativeFeedNavigator,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
// import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";

export default function App() {
  // const netInfo = useNetInfo();


  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator />}
      </NavigationContainer>
      {/* <OfflineNotice /> */}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
