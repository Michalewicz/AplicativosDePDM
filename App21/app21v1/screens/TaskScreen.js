import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TaskScreen({ navigation, route }) {
  const [taskName, setTaskName] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (route.params && route.params.task) {
      setEditingTask(route.params.task);
      setTaskName(route.params.task.name);
    }
  }, [route.params]);

  const saveTask = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      const tasks = storedTasks ? JSON.parse(storedTasks) : [];
      
      // Se for edição, atualiza a tarefa existente
      if (editingTask) {
        const updatedTasks = tasks.map(task => {
          if (task.id === editingTask.id) {
            return { ...task, name: taskName };
          }
          return task;
        });
        await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
      } else {
        // Cria uma nova tarefa
        const newTask = {
          id: Date.now(), // id único com base no timestamp
          name: taskName
        };
        tasks.push(newTask);
        await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
      }
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar a tarefa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Digite o nome da tarefa"
        value={taskName}
        onChangeText={setTaskName}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={saveTask} 
          style={[styles.button, styles.saveButton]}
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
  buttonContainer: {
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
