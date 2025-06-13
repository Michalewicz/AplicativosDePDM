import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

export default function Nome({ func }) {
  return (
    <View style = {styles.conteiner}>
      <Text style = {styles.titulo} >Nome : </Text>
      <TextInput
        style={styles.caixa}
        onChangeText={(texto) => func(texto)}
      />
    </View>
  );
}