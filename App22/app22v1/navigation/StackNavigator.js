import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ItemFormScreen from '../screens/ItemFormScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{ title: '#App 22 - Lista de Compras' }}
      />
      <Stack.Screen
        name="ItemForm"
        component={ItemFormScreen}
        options={{ title: 'Mercadoria' }}
      />
    </Stack.Navigator>
  );
}
