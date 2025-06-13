import { View, Text, Picker } from 'react-native';
import React,{ useState } from 'react';
import { styles } from './styles';

export default function Moeda({ titulo, func }) {
  const [selected, setSelected] = useState(0);

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
        <Picker.Item key={0} value={0} label="-- Selecione a Moeda --" />
        <Picker.Item key={1} value={1} label="Real (BR$)" />
        <Picker.Item key={2} value={5.64} label="Dólar (U$)" />
        <Picker.Item key={3} value={6.36} label="Euro (EU$)" />
      </Picker>
    </View>
  );
}