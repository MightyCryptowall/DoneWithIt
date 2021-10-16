import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

function AppText({style, children, ...otherProps}) {
    return (
        <Text style={[styles.text, style]} {...otherProps}>
            {children}
        </Text>
    );
}


const styles = StyleSheet.create({
    text: {
        color: "#111",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
});






export default AppText;