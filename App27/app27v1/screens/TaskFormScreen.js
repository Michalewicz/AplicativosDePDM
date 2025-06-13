import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const API_URL = 'https://tarefa-backend.onrender.com/tasks';

export default function TaskFormScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const editingTask = route.params ? route.params.task : null;

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || '');
      setDescription(editingTask.description || '');
    }
  }, [editingTask]);

  const submitTask = async () => {
    if (!title.trim()) {
      Alert.alert('Atenção', 'Por favor, informe o título da tarefa.');
      return;
    }
    const method = editingTask ? 'PUT' : 'POST';
    const endpoint = editingTask ? `${API_URL}/${editingTask.id}` : API_URL;
    const body = JSON.stringify({ title, description });

    try {
      await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título da tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Descrição da tarefa"
        value={description}
        onChangeText={setDescription}
        multiline
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
          onPress={submitTask}
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
    borderColor: '#ccc', 
    borderRadius: 5, 
    padding: 12, 
    fontSize: 18, 
    marginBottom: 15 
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  buttonRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  button: { 
    padding: 12, 
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
