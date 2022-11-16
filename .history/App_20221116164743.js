import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotas from './src/rotas';



export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
		<AppRotasas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
