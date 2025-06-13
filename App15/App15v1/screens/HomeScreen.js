import React from 'react';
import { FlatList, View } from 'react-native';
import JobCard from '../components/JobCard';

const jobs = [
  {
    id: '1',
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3000,00',
    descricao: 'Responsável por APIs REST.',
    contato: 'backend@empresa.com',
  },
  {
    id: '2',
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 3000,00',
    descricao: 'Gerenciamento de pipelines de dados.',
    contato: 'dados@empresa.com',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <JobCard
          job={item}
          onPress={() => navigation.navigate('Details', { job: item })}
        />
      )}
    />
  );
}
