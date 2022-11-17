import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Produtor = () => {

	const route = useRoute();

	console.log(route.params)

  return (
    <View>
      <Text>Produtor</Text>
    </View>
  );
};

export default Produtor;

const styles = StyleSheet.create({});
