import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { movie } = route.params;
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{movie.nome}</Text>
      <Image 
        source={{ uri: movie.foto }} 
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.synopsisTitle}>Sinopse</Text>
      <Text style={styles.synopsis}>{movie.sinopse}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5
  },
  synopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  synopsis: {
    fontSize: 16,
    textAlign: 'justify'
  }
});
