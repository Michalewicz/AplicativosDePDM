import React, { useState } from 'react';
import { View, TextInput, Button} from 'react-native';
import {styles} from './styles'

export default function InputGit({ onBuscar }) {
  const [login, setLogin] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o login git..."
        value={login}
        onChangeText={setLogin}
      />
      <Button title="Buscar" onPress={() => onBuscar(login)} />
    </View>
  );
}