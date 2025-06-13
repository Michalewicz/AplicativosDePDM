import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DolarScreen from '../screens/DolarScreen';
import EuroScreen from '../screens/EuroScreen';
import BitcoinScreen from '../screens/BitcoinScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dólar" component={DolarScreen} />
      <Tab.Screen name="Euro" component={EuroScreen} />
      <Tab.Screen name="Bitcoin" component={BitcoinScreen} />
    </Tab.Navigator>
  );
}
