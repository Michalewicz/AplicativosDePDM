import { View, TextInput } from 'react-native';

import {styles} from './styles'

export default function EntradaTexto(props) {

  return (
    <View>
      <TextInput 
        style={styles.entradaTexto}
        placeholder={props.placeholder}
        onChangeText={props.funcao}
      />
    </View>
  );
}
