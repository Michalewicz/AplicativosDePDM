import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

import { styles } from './styles';

export default function SliderLimite(props) {
  const [valor, setValor] = useState(0);

  return (
    <View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={5000}
        onValueChange={(valorSelecionado) => {
          setValor(valorSelecionado);
          props.setLimite(valorSelecionado);
        }}
        step={0.01}
        value={valor}
      />

      <Text style={{ textAlign: 'center', fontSize: 30 }}>
        R$ {valor.toFixed(2)}
      </Text>
    </View>
  );
}
