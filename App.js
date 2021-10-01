import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import SafeViewAndroid from './components/SafeViewAndroid';


export default function App() {



  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <Text >Hello React Native!</Text>
      <Image 
        fadeDuration={1000}
        source={{ 
          uri: "https://picsum.photos/200",
          width: 200,
          height: 200
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
