import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listings" component={ListingsScreen} 
            options ={{
                headerTitleAlign: "center",
                headerShown: false,
            }}
        />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator