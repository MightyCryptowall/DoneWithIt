import React from 'react';
import Constants from 'expo-constants';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colors from '../config/colors';

function Screen({children}) {
  
    return (
        <View>
             <View style={styles.statusBarIOS} />
            
        <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor={colors.white} style="dark" />
            {children}
        </SafeAreaView>
        </View>
    );
}

const headerHeight = 48;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    },
    statusBarIOS: {
        // backgroundColor: "salmon",
        backgroundColor: colors.white,
        paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        height: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
    }
})

export default Screen;