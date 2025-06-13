import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{product.titulo}</Text>
      <Text style={styles.descricao}>{product.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  imagem: { width: 250, height: 250, marginBottom: 20, borderRadius: 10 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  descricao: { fontSize: 16, textAlign: 'center' },
});
