import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function JobCard({ job, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.titulo}</Text>
      <Button title="Saiba mais" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eef',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});
