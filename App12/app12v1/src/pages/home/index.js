import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

import Nome from '../../components/campo_nome/index';
import Idade from '../../components/campo_idade/index';
import Sexo from '../../components/campo_sexo/index';
import Escolaridade from '../../components/campo_escolaridade/index';
import Limite from '../../components/campo_limite/index';
import Nacionalidade from '../../components/campo_nacionalidade/index';
import Enviar from '../../components/botao_enviar/index';

export default function Home() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [nacionalidade, setNacionalidade] = useState(false);

  return (
    <View style={styles.borda}>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <Nome func={setNome} />
      <Idade func={setIdade} />
      <Sexo func={setSexo} />
      <Escolaridade func={setEscolaridade} />
      <Limite func={setLimite} />
      <Nacionalidade func={(valor) => {
  const novaInfo = [...informacoes];
  novaInfo[5] = valor;
  setInformacoes(novaInfo);
}} />
      <Enviar
        texto="Enviar"
        func={() =>
          navigation.navigate('Formulario', {
            dados: [nome, idade, sexo, escolaridade, limite, nacionalidade],
          })
        }
      />
    </View>
  );
}
