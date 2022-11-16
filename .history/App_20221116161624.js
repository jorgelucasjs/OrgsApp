import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/telas/Home';
import Home from './src/telas/';


export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
