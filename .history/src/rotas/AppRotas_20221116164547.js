import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
	<NavigationContainer>
	<Tab.Navigator>
	  <Tab.Screen name="Home" component={Home} />
	  <Tab.Screen
		name="MelhoresProdutores"
		component={MelhoresProdutores}
	  />
	</Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
