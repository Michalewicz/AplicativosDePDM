import { View, FlatList, Text } from 'react-native';

import Vaga from '../../components/vaga'
import {styles} from './styles'

export default function PaginaVagas() {
  const vagas = [
    {id: '1', tituloVaga: 'Desenvolvedor Backend - Junior', descricaoVaga: 'Descrição: (DESCRIÇÃO INCRÍVEL SOBRE DESENVOLVEDORES BACKEND - JUNIOR)', valorVaga: 'Salário: R$ 1412,00', contatoVaga: 'Contato: +55 (99) 9999-9999'},
    {id: '2', tituloVaga: 'Desenvolvedor Backend - Pleno', descricaoVaga: 'Descrição: (DESCRIÇÃO INCRÍVEL SOBRE DESENVOLVEDORES BACKEND - PLENO)', valorVaga: 'Salário: R$ 2814,00', contatoVaga: 'Contato: +55 (98) 9999-9999'},
    {id: '3', tituloVaga: 'Desenvolvedor Backend - Sênior', descricaoVaga: 'Descrição: (DESCRIÇÃO INCRÍVEL SOBRE DESENVOLVEDORES BACKEND - SÊNIOR)', valorVaga: 'Salário: R$ 5628,00', contatoVaga: 'Contato: +55 (97) 9999-9999'},
    {id: '4', tituloVaga: 'Engenheiro de Dados', descricaoVaga: 'Descrição: (DESCRIÇÃO INCRÍVEL SOBRE ENGENHEIRO DE DADOS)', valorVaga: 'Salário: R$ 11.256,00', contatoVaga: 'Contato: +55 (96) 9999-9999'},
  ];

  return (
    <View>
      <Text style={styles.titulo}>PrimeVagas</Text>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Vaga
            tituloVaga={item.tituloVaga}
            descricaoVaga={item.descricaoVaga}
            valorVaga={item.valorVaga}
            contatoVaga={item.contatoVaga}
          />
        )}
      />
    </View>
  );
}
