import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imagem }} style={styles.imagem} />
      <Text style={styles.titulo}>{product.titulo}</Text>
      <Button title="Ver detalhes" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  imagem: { width: 150, height: 150, borderRadius: 8 },
  titulo: { marginVertical: 10, fontWeight: 'bold' },
});
