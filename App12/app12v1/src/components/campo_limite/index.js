import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

export default function Limite({ func }) {
  const [valor, setValor] = useState(0);

  return (
    <View >
      <Text style={styles.titulo}>Limite : </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1000}
        step={.01}
        value={valor}
        onValueChange={(val) => {
          setValor(val);
          func(val);
        }}
      />
      <Text style={styles.limite}>R$ {valor.toFixed(2)}</Text>
    </View>
  );
}