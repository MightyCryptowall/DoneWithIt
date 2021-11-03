import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

function WelcomeScreen(props) {

    const navigation = useNavigation();

    return (
        <Screen style={styles.container}>
        <ImageBackground 
        blurRadius={3}
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png") }/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
            </View>
        </ImageBackground>
        </Screen>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding:20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: "absolute",
        top: 100,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    },
})

export default WelcomeScreen;