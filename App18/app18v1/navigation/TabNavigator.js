import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DolarScreen from '../screens/DolarScreen';
import EuroScreen from '../screens/EuroScreen';
import BitcoinScreen from '../screens/BitcoinScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Dólar') iconName = 'logo-usd';
        else if (route.name === 'Euro') iconName = 'logo-euro';
        else if (route.name === 'Bitcoin') iconName = 'logo-bitcoin';

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}>
      <Tab.Screen name="Dólar" component={DolarScreen} />
      <Tab.Screen name="Euro" component={EuroScreen} />
      <Tab.Screen name="Bitcoin" component={BitcoinScreen} />
    </Tab.Navigator>
  );
}
