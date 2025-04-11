import { View, Button } from 'react-native';

export default function EntradaTexto(props) {

  return (
    <View>
      <Button
        title = 'Confirmar'
        color = 'darkblue'
        onPress = {props.funcao}
      />
    </View>
  );
}
