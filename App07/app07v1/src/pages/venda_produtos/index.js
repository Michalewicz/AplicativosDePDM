import { View, ScrollView, Text } from 'react-native';

import Produto from '../../components/produto'
import {styles} from './styles'

export default function PaginaProduto() {
  return (
    <View>
      <Text style={styles.titulo}>PrimePizza</Text>
      <ScrollView horizontal={true}>
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
      </ScrollView>
    </View>
  );
}

