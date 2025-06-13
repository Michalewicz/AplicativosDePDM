import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PessoalScreen from '../screens/PessoalScreen';
import FormacaoScreen from '../screens/FormacaoScreen';
import ExperienciaScreen from '../screens/ExperienciaScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="Pessoal" component={PessoalScreen} />
      <Tab.Screen name="Formação" component={FormacaoScreen} />
      <Tab.Screen name="Experiência" component={ExperienciaScreen} />
    </Tab.Navigator>
  );
}
