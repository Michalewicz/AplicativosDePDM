import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchComponent from '../components/SwitchComponent';

export default function HomeScreen() {
  const [isDia, setIsDia] = useState(true);
  const [isPequeno, setIsPequeno] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDia ? '#f5f5f5' : '#333'
  };

  const textStyle = {
    fontSize: isPequeno ? 16 : 28,
    color: isDia ? '#000' : '#fff'
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.switchContainer}>
        <SwitchComponent label="Dia" value={isDia} onChange={setIsDia} />
        <SwitchComponent label="Pequeno" value={isPequeno} onChange={setIsPequeno} />
      </View>
      <View style={styles.phraseContainer}>
        <Text style={[styles.phraseText, textStyle]}>
          A vingança nunca é plena, mata a alma e envenena{"\n"}(Seu Madruga)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  switchContainer: {
    marginBottom: 40
  },
  phraseContainer: {
    alignItems: 'center'
  },
  phraseText: {
    textAlign: 'center'
  }
});
