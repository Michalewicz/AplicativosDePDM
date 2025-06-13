import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from './navigation/TopTabNavigator'; 

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
