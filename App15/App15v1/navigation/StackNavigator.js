import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Vagas' }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes da Vaga' }} />
    </Stack.Navigator>
  );
}
