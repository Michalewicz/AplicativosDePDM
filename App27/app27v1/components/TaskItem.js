import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onEdit, onDelete}) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.info}>
        <Text style={[styles.title, task.done && styles.doneTitle]}>
          {task.title}
        </Text>
        {task.description ? (
          <Text style={styles.description}>
            {task.description}
          </Text>
        ) : null}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  info: { 
    marginBottom: 10 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  doneTitle: {
    textDecorationLine: 'line-through',
    color: 'green'
  },
  description: {
    fontSize: 16,
    color: '#555'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#6200ee',
    borderRadius: 4
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
});
