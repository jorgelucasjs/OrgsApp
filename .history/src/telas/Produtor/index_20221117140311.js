import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Cesta from './componentes/Cesta';
import Topo from '../../componentes/Topo';

const Produtor = () => {
  const route = useRoute();

  const {nome, imagem, cestas} = route.params;

  const TopoLista = () => {
    return (
      <>
        <Topo />
      </>
    );
  };

  return (
    <FlatList
      data={cestas}
      renderItem={({item}) => (
        <Cesta
          {...item}
          produtor={{
            nome,
            imagem,
          }}
        />
      )}
      style={estilos.lista}
    />
  );
};

export default Produtor;

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  conteudo: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  produtorImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  produtor: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cestas: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
