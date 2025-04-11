
import React from 'react';
import { Switch } from 'react-native';

export default function SwitchNacionalidade({ value, onValueChange }) {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
    />
  );
}
