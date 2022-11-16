import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
