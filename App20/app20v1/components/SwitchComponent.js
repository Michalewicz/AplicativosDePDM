import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SwitchComponent({ label, value, onChange }) {
  return (
    <View style={styles.switchItem}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  switchItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    fontSize: 18,
    marginRight: 10
  }
});
