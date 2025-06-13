import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'; // Você pode usar o mesmo estilo ou criar um novo

export default function CEP({ endereco }) {
  if (!endereco || !endereco.cep) {
    return null; // ou um Text informando que nada foi encontrado
  }

  return (
    <View>
      <Text style={styles.endereco}>CEP: {endereco.cep}</Text>
      <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
      <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
      <Text style={styles.endereco}>Cidade: {endereco.localidade} - {endereco.uf}</Text>
      <Text style={styles.endereco}>Estado: {endereco.estado}</Text>
      <Text style={styles.endereco}>Regiao: {endereco.regiao}</Text>
    </View>
  );
}