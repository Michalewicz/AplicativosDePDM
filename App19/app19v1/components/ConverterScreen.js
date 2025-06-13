import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ConverterScreen({ conversionRate, currencySymbol }) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const numericValue = parseFloat(value.replace(",", "."));
    if (!isNaN(numericValue)) {
      setResult((numericValue / conversionRate).toFixed(2));
    } else {
      setResult('Valor inválido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />
      <Button title="Converter" onPress={handleConvert} />
      {result !== null && (
        <Text style={styles.result}>
          Resultado: {currencySymbol} {result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  result: {
    marginTop: 20,
    fontSize: 20
  }
});
