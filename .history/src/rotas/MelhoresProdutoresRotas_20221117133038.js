import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutores from '../telas/MelhoresProdutores';

export default function MelhoresProdutoresRotas() {
  return <ProdutorRotas component={MelhoresProdutores}/>;
}

const styles = StyleSheet.create({});
