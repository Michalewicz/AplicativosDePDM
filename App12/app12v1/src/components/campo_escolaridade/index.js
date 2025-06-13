import React from 'react';
import { View, Text, Picker } from 'react-native';
import { styles } from './styles';

export default function Escolaridade({ func }) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Escolaridade : </Text>
      <Picker
        style={styles.picker}
        onValueChange={(itemValue) => func(itemValue)}
      >
        <Picker.Item label="Fundamental incompleto" value="Fundamental incompleto" />
        <Picker.Item label="Fundamental completo" value="Fundamental completo" />
        <Picker.Item label="Médio incompleto" value="Médio incompleto" />
        <Picker.Item label="Médio completo" value="Médio completo" />
        <Picker.Item label="Superior incompleto" value="Superior incompleto" />
        <Picker.Item label="Superior completo" value="Superior completo" />
      </Picker>
    </View>
  );
}