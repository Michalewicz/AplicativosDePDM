import React from 'react';
import { ScrollView, View } from 'react-native';
import JobCard from '../components/JobCard';

const jobs = [
  {
    id: 1,
    titulo: 'Desenvolvedor Backend',
    salario: 'R$ 3000,00',
    descricao: 'Responsável por criar APIs.',
    contato: 'backend@email.com',
  },
  {
    id: 2,
    titulo: 'Engenheiro de Dados',
    salario: 'R$ 3000,00',
    descricao: 'Análise e tratamento de dados.',
    contato: 'dados@email.com',
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onPress={() => navigation.navigate('Details', { job })}
        />
      ))}
    </ScrollView>
  );
}
