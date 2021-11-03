import React from 'react';
import LottieView from "lottie-react-native";
import loader from "../assets/animations/loader";

function ActivityIndicator({visible = false}) {



    if(!visible) return null;

    return (
       <LottieView 
            autoPlay
            loop
            source={loader}
       />
    );
}

export default ActivityIndicator;