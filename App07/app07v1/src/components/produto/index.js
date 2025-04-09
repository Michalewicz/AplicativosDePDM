import { Text, View, Image } from 'react-native';

import {styles} from './styles'

export default function Produto() {
  
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://superpizzapan.com.br/wp-content/uploads/2024/04/marguerita.png'}} style={styles.imagem}/>
      <Text style={styles.tituloProduto}>Pizza Marguerita</Text>
      <Text style={styles.valorProduto}>R$ 35,00</Text>
    </View>
  );
}

