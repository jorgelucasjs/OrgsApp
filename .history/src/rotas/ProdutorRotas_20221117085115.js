import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../telas/Produtor';

const Stack = createNativeStackNavigator();
const ProdutorRotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
};

export default ProdutorRotas;
