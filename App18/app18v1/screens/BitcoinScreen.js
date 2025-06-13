import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BitcoinScreen() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);

  const converter = () => {
    const real = parseFloat(valor);
    const taxaBTC = 350000; // exemplo
    if (!isNaN(real)) {
      setResultado((real / taxaBTC).toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        style={styles.input}
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Converter" onPress={converter} />
      {resultado && (
        <Text style={styles.result}>Resultado: ₿ {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20, color: 'red' },
  input: {
    borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 10
  },
  result: {
    marginTop: 20, fontSize: 18, textAlign: 'center', color: 'blue'
  }
});
