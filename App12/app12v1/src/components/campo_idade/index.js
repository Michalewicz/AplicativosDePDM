import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function Idade({ func }) {
  return (
    <View style= {styles.conteiner}>
      <Text style={styles.titulo}>Idade : </Text>
      <TextInput
        style={styles.caixa}
        onChangeText={(texto) => func(texto)}
        keyboardType="numeric"
      />
    </View>
  );
}