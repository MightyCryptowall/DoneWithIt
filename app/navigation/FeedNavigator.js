import React from "react"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TransitionPresets,CardStyleInterpolators, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import { Easing } from "react-native";
import routes from "./routes";

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    }
  }
  
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    }
  }
  
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ 
        presentation: 'modal',
        gestureEnabled: true,
    }} >
       
        <Stack.Screen name="Listings" component={ListingsScreen} 
            options ={{
                headerTitleAlign: "center",
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
        />
        <Stack.Screen 
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
        mode="card"
        options ={{
            headerTitleAlign: "center",
            gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomIOS,
        }}
        
        />
 
    </Stack.Navigator>
)

export default FeedNavigator