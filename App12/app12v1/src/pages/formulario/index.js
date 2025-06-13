import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Enviar from '../../components/botao_enviar/index';

export default function Formulario() {
  const navigation = useNavigation();
  const route = useRoute();
  const { dados } = route.params;

  return (
    <View style={styles.borda}>
      <Text style={styles.titulo}>Dados informados</Text>
      <Text style={styles.topicos}>Nome : {dados[0]}</Text>
      <Text style={styles.topicos}>Idade : {dados[1]}</Text>
      <Text style={styles.topicos}>Sexo : {dados[2]}</Text>
      <Text style={styles.topicos}>Escolaridade : {dados[3]}</Text>
      <Text style={styles.topicos}>Limite : {dados[4]}</Text>
      <Text style={styles.topicos}>Brasileiro : {dados[5] ? 'Sim' : 'Não'}</Text>

      <Enviar texto="Retornar" func={() => navigation.navigate('Home')} />
    </View>
  );
}