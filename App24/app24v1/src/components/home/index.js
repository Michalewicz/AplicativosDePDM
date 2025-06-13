import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InputGit from '../inputGit/index';
import PerfilCard from '../perfilCard/index';
import {styles} from './styles'

export default function Home() {
  const [dados, setDados] = useState(null);

  const buscarDados = async (login) => {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      if (data && !data.message) setDados(data);
      else setDados(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil dos Devs</Text>
      <InputGit onBuscar={buscarDados} />
      {dados && <PerfilCard dados={dados} />}
    </View>
  );
}