import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import AppRotas from './.history/src/rotas/AppRotas_20221116164446';



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
