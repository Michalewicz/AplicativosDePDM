import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../components/TaskItem';

export default function MainScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  // Função para carregar as tarefas salvas
  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
    }
  };

  // Recarrega as tarefas sempre que a tela recebe foco
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadTasks();
    });
    return unsubscribe;
  }, [navigation]);

  // Função para excluir uma tarefa
  const deleteTask = async (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
    await AsyncStorage.setItem('@tasks', JSON.stringify(filteredTasks));
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem 
            task={item} 
            onEdit={() => navigation.navigate('Task', { task: item })} 
            onDelete={() => deleteTask(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma tarefa encontrada.</Text>}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('Task')}
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
  empty: { 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 18 
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
