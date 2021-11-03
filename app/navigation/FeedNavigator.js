import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TransitionPresets,CardStyleInterpolators } from '@react-navigation/stack';
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

const FeedNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Listings" component={ListingsScreen} 
            options ={{
                headerTitleAlign: "center"
            }}
        />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}
            // options ={{
            //     headerShown: false
            // }}
        />
    </Stack.Navigator>
)

export default FeedNavigator