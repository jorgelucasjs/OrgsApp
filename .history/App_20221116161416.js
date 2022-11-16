import React from 'react';
import {StatusBar, SafeAreaView, sty} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/telas/Home';

export default function App() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
}
