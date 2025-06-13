import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import TaskFormScreen from '../screens/TaskFormScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TaskList" 
        component={TaskListScreen}
        options={{ title: 'Cadastro de Tarefas' }}
      />
      <Stack.Screen 
        name="TaskForm" 
        component={TaskFormScreen} 
        options={{ title: 'Detalhes / Edição da Tarefa' }}
      />
    </Stack.Navigator>
  );
}
