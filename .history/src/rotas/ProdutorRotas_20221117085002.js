import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const ProdutorRotas = () => {
  return (
    <Stack.Navigator>
      <Text>ProdutorRotas</Text>
    </View>
  );
};

export default ProdutorRotas;

const styles = StyleSheet.create({});
