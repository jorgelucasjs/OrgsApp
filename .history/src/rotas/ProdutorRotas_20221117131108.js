import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';
import Home from '../telas/Home';

const Stack = createNativeStackNavigator();
const ProdutorRotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Produtor" component={Produtor} />

    </Stack.Navigator>
  );
};

export default ProdutorRotas;
