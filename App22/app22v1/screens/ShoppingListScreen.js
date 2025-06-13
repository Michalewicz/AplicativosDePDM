import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingItem from '../components/ShoppingItem';

export default function ShoppingListScreen({ navigation }) {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@shoppingItems');
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Erro ao carregar os itens:', error);
    }
  };

  // Recarrega os itens sempre que a tela recebe foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadItems();
    });
    return unsubscribe;
  }, [navigation]);

  const deleteItem = async (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    await AsyncStorage.setItem('@shoppingItems', JSON.stringify(updatedItems));
  };

  return (
    <View style={styles.container}>
      {items.length === 0 && (
        <Text style={styles.emptyText}>Nenhuma mercadoria adicionada.</Text>
      )}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShoppingItem 
            item={item} 
            onEdit={() => navigation.navigate('ItemForm', { item })}
            onDelete={() => deleteItem(item.id)}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ItemForm')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#555'
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    backgroundColor: '#6200ee',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 36
  }
});
