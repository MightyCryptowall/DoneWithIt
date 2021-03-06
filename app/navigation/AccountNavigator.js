import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator
        screenOptions ={{
            headerTitleAlign: "center"
        }}
    >
        <Stack.Screen name="AccountScreen" component={AccountScreen} 
            
        />
        <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
)

export default AccountNavigator