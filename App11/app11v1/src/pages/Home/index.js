import { Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import Moeda from '../../../components/Moeda/index';
import Converter from '../../../components/Converter/index';
import Valor from '../../../components/Valor/index';
import Resultado from '../../../components/Resultado/index';

export default function Home() {
  const [valor, setValor] = useState('');
  const [moeda1, setMoeda1] = useState();
  const [moeda2, setMoeda2] = useState();
  const [resultado, setResultado] = useState(null);

  return (
    <View style={styles.borda}>
      <Text style={styles.titulo}>Conversor de Moedas Real, Dólar, Euro</Text>

      <Valor func={(texto) => setValor(parseFloat(texto))} />

      <Moeda
        titulo="Valor 1:"
        func={(itemValue) => setMoeda1(parseFloat(itemValue))}
      />
      <Moeda
        titulo="Valor 2:"
        func={(itemValue) => setMoeda2(parseFloat(itemValue))}
      />

      <Converter
        titulo="Converter"
        func={() => {
          if(moeda1===0||moeda2 === 0){
            setResultado(0);
          }else if (valor && moeda1 && moeda2 != null) {
            setResultado((valor * moeda1) / moeda2);
          } else {
            setResultado(0);
          }
        }}
      />
      <Resultado
        texto={
          resultado !== null
            ? moeda2 === 1
              ? 'R$ ' + resultado.toFixed(2)
              : moeda2 === 5.64
              ? 'U$ ' + resultado.toFixed(2)
              : moeda2===6.36
              ?'EU$ ' + resultado.toFixed(2)
              : 'Insira as Moedas'
            : ''
        }
      />
    </View>
  );
}
