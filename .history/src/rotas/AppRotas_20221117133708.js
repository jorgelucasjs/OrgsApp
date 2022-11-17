import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MelhoresProdutores from '../telas/MelhoresProdutores';
import ProdutorRotas from './ProdutorRotas';
import 
const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
