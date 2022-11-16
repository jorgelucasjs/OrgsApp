import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';


export default function App() {


const Tab = createBottomTabNavigator();
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
