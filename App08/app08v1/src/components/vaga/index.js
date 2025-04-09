import { Text, View, Image } from 'react-native';

import {styles} from './styles'

export default function Vaga(props) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.tituloVaga}>{props.tituloVaga}</Text>
      <Text style={styles.valorVaga}>{props.valorVaga}</Text>
      <Text style={styles.descricaoVaga}>{props.descricaoVaga}</Text>
      <Text style={styles.descricaoVaga}>{props.contatoVaga}</Text>
    </View>
  );
}

