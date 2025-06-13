import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './styles';

export default function PerfilCard({ dados }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: dados.avatar_url }} style={styles.avatar} />
      <Text style={styles.texto}>Id: {dados.id}</Text>
      <Text style={styles.texto}>Nome: {dados.name}</Text>
      <Text style={styles.texto}>Repositórios: {dados.public_repos}</Text>
      <Text style={styles.texto}>Criado em: {new Date(dados.created_at).toLocaleDateString()}</Text>
      <Text style={styles.texto}>Seguidores: {dados.followers}</Text>
      <Text style={styles.texto}>Seguindo: {dados.following}</Text>
    </View>
  );
}

