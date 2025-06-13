import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import api from '../../services/index';
import { styles } from './styles';

export default function Home() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null); // começa como null

  const consultaCep = async (cep) => {
    try {
      const response = await api.get('/' + cep + '/json/');
      setEndereco(response.data);
    } catch (error) {
      console.warn('Erro ao consultar CEP:', error);
      setEndereco(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
      />

      <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />

      {endereco && !endereco.erro && (
        <>
          <Text style={styles.endereco}>Endereco:{endereco.cep}</Text>
          <Text style={styles.endereco}>Logradouro:{endereco.logradouro}</Text>
          <Text style={styles.endereco}>Bairro:{endereco.bairro}</Text>
          <Text style={styles.endereco}>Localidade:{endereco.localidade} {endereco.uf}</Text>
          <Text style={styles.endereco}>Estado:{endereco.estado}</Text>
          <Text style={styles.endereco}>Regiao:{endereco.regiao}</Text>
        </>
      )}
    </View>
  );
}

