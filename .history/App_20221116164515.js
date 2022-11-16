import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
