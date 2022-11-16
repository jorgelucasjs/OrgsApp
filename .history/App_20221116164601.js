import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';



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
