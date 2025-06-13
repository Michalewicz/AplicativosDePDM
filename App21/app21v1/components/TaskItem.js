import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{task.name}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.button}>
          <MaterialIcons name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  itemText: { 
    fontSize: 18 
  },
  buttons: { 
    flexDirection: 'row' 
  },
  button: { 
    marginHorizontal: 10 
  }
});
