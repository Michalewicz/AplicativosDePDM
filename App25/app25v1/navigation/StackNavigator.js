import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'App de Filmes' }}
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ title: 'Detalhes do Filme' }}
      />
    </Stack.Navigator>
  );
}
