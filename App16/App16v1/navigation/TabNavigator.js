import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PessoalScreen from '../screens/PessoalScreen';
import FormacaoScreen from '../screens/FormacaoScreen';
import ExperienciaScreen from '../screens/ExperienciaScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Pessoal') {
            iconName = 'person';
          } else if (route.name === 'Formação') {
            iconName = 'school';
          } else if (route.name === 'Experiência') {
            iconName = 'briefcase';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Pessoal" component={PessoalScreen} />
      <Tab.Screen name="Formação" component={FormacaoScreen} />
      <Tab.Screen name="Experiência" component={ExperienciaScreen} />
    </Tab.Navigator>
  );
}
