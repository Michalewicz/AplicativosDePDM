import { View, Text, Switch } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Nacionalidade({ func }) {
  const [valor, setValor] = useState(true);

  const atualizarValor = (valorSwitch) => {
    setValor(valorSwitch);
    func(valorSwitch); // envia valor para Home
  };

  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Brasileiro :   </Text>
      <Switch
        value={valor}
        onValueChange={atualizarValor}
        thumbColor="red"
      />
      <Text>{valor ? ' Brasileiro' : ' Estrangeiro'}</Text>
    </View>
  );
}