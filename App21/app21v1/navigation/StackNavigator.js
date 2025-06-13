import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{ title: 'Lista de Tarefas' }}
      />
      <Stack.Screen 
        name="Task" 
        component={TaskScreen} 
        options={{ title: 'Adicionar / Editar Tarefa' }}
      />
    </Stack.Navigator>
  );
}
