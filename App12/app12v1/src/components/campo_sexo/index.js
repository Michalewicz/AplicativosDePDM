import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import { styles } from './styles';

export default function Sexo({ func }) {
  const [selected, setSelected] = useState('Masculino');

  return (
    <View style = {styles.conteiner}>
      <Text style={styles.titulo}>Sexo : </Text>
      <Picker
        selectedValue={selected}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelected(itemValue);
          func(itemValue);
        }}
      >
        <Picker.Item color = 'rgb(0,22,222)' label="Masculino" value="Masculino"/>
        <Picker.Item color = 'rgb(255,22,222)' label="Feminino" value="Feminino" />
      </Picker>
    </View>
  );
}