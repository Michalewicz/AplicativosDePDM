import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ItemFormScreen({ navigation, route }) {
  const [mercadoria, setMercadoria] = useState('');
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    if (route.params && route.params.item) {
      setMercadoria(route.params.item.name);
      setQuantidade(String(route.params.item.quantity));
    }
  }, [route.params]);

  const saveItem = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@shoppingItems');
      const items = storedItems ? JSON.parse(storedItems) : [];

      if (route.params && route.params.item) {
        // Edição de item existente
        const updatedItems = items.map(item => {
          if (item.id === route.params.item.id) {
            return { id: item.id, name: mercadoria, quantity: quantidade };
          }
          return item;
        });
        await AsyncStorage.setItem('@shoppingItems', JSON.stringify(updatedItems));
      } else {
        // Adiciona novo item
        const newItem = { id: Date.now(), name: mercadoria, quantity: quantidade };
        items.push(newItem);
        await AsyncStorage.setItem('@shoppingItems', JSON.stringify(items));
      }
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar o item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mercadoria"
        value={mercadoria}
        onChangeText={setMercadoria}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={saveItem}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 5, 
    padding: 10, 
    fontSize: 18, 
    marginBottom: 20 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center'
  },
  cancelButton: { 
    backgroundColor: '#aaa' 
  },
  saveButton: { 
    backgroundColor: '#6200ee' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18 
  }
});
