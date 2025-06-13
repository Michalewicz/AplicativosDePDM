import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function MovieItem({ movie, onPress }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{movie.nome}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.readMore}>Leia mais</Text>
      </TouchableOpacity>
      <Image 
        source={{ uri: movie.foto }}
        style={styles.photo}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  readMore: {
    color: 'blue',
    marginBottom: 5,
    fontSize: 16
  },
  photo: {
    width: '100%',
    height: 150,
    borderRadius: 5
  }
});
