import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ShoppingItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textSection}>
        <Text style={styles.itemText}>
          {item.name} ({item.quantity})
        </Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={onEdit} style={styles.iconButton}>
          <MaterialIcons name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.iconButton}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textSection: {
    flex: 1
  },
  itemText: { 
    fontSize: 18 
  },
  icons: { 
    flexDirection: 'row'
  },
  iconButton: {
    marginHorizontal: 10
  }
});
