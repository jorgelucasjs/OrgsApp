import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';


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
