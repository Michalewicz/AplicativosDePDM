import { View, Text, Picker } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

export default function Moeda({ titulo, func, cotacoes }) {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{titulo}</Text>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue) => {
          setSelected(itemValue);
          func(itemValue);
        }}
      >
        <Picker.Item key={0} value={null} label="-- Selecione a Moeda --" />
        <Picker.Item key={1} value="BRL" label="Real (BR$)" />
        {cotacoes?.dolar?.ask && (
          <Picker.Item key={2} value="USD" label="Dólar (U$)" />
        )}
        {cotacoes?.euro?.ask && (
          <Picker.Item key={3} value="EUR" label="Euro (EU$)" />
        )}
        {cotacoes?.bitcoin?.ask && (
          <Picker.Item key={4} value="BTC" label="Bitcoin (BTC)" />
        )}
      </Picker>
    </View>
  );
}
