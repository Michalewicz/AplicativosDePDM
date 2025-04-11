import { ScrollView, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import EntradaTexto from '../../components/EntradaTexto';
import Slider from '../../components/Slider';
import SwitchNacionalidade from '../../components/Switch';
import Botao from '../../components/Botao';

import { styles } from './styles';

export default function PaginaBanco() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [nacionalidade, setNacionalidade] = useState(false);
  const [informacoes, setInformacoes] = useState(null);

  function exibirTela() {
    setInformacoes({
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      nacionalidade: nacionalidade ? 'Brasileiro' : 'Outro',
    });
  }

  return (
    <ScrollView>
      <Text style={styles.titulo}>PrimeBanco</Text>

      <Text style={styles.texto}>
        Nome: <EntradaTexto placeholder={'Digite seu nome'} funcao={setNome} />
      </Text>

      <Text style={styles.texto}>
        Idade:{' '}
        <EntradaTexto placeholder={'Digite sua idade'} funcao={setIdade} />
      </Text>

      <Text style={styles.texto}>
        Sexo:{' '}
        <Picker
          selectedValue={sexo}
          onValueChange={(value) => setSexo(value)}
          style={styles.pickerEstilizado}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Prefiro não dizer" value="Não informado" />
        </Picker>
      </Text>

      <Text style={styles.texto}>
        Escolaridade:{' '}
        <Picker
          selectedValue={escolaridade}
          onValueChange={(value) => setEscolaridade(value)}
          style={styles.pickerEstilizado}>
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Fundamental" value="Fundamental" />
          <Picker.Item label="Médio" value="Médio" />
          <Picker.Item label="Superior" value="Superior" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
      </Text>

      <Text style={styles.texto}>
        Limite: <Slider setLimite={setLimite} />
      </Text>

      <Text style={styles.texto}>Brasileiro? <SwitchNacionalidade style={styles.brasil} value={nacionalidade} onValueChange={setNacionalidade} />
        <Text style={{ marginLeft: 10, fontSize: 18 }}>
          {nacionalidade ? 'Sim' : 'Não'}
        </Text>
      </Text>
      <Botao funcao={exibirTela} />

      {informacoes && (
        <View style={styles.informacoesContainer}>
          <Text style={styles.infoTexto}>Nome: {informacoes.nome}</Text>
          <Text style={styles.infoTexto}>Idade: {informacoes.idade}</Text>
          <Text style={styles.infoTexto}>Sexo: {informacoes.sexo}</Text>
          <Text style={styles.infoTexto}>
            Escolaridade: {informacoes.escolaridade}
          </Text>
          <Text style={styles.infoTexto}>Limite: R$ {informacoes.limite}</Text>
          <Text style={styles.infoTexto}>
            Nacionalidade: {informacoes.nacionalidade}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
