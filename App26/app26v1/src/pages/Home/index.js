import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import Moeda from '../../../components/Moeda/index';
import Converter from '../../../components/Converter/index';
import Valor from '../../../components/Valor/index';
import Resultado from '../../../components/Resultado/index';
import api from '../../services/index';

export default function Home() {
  const [valor, setValor] = useState('');
  const [moeda1, setMoeda1] = useState(null);
  const [moeda2, setMoeda2] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [cotacoes, setCotacoes] = useState({
    dolar: {},
    euro: {},
    bitcoin: {}
  });

  useEffect(() => {
    const carregarMoedas = async () => {
      const resDolar = await api.get('/json/last/USD-BRL');
      const resEuro = await api.get('/json/last/EUR-BRL');
      const resBTC = await api.get('/json/last/BTC-BRL');

      setCotacoes({
        dolar: resDolar.data.USDBRL,
        euro: resEuro.data.EURBRL,
        bitcoin: resBTC.data.BTCBRL
      });
    };

    carregarMoedas();
  }, []);

  const taxas = {
    BRL: 1,
    USD: Number(cotacoes.dolar.ask),
    EUR: Number(cotacoes.euro.ask),
    BTC: Number(cotacoes.bitcoin.ask)
  };

  return (
    <View style={styles.borda}>
      <Text style={styles.titulo}>Conversor de Moedas Real, Dólar, Euro</Text>

      <Valor func={(texto) => setValor(parseFloat(texto))} />

      <Moeda titulo="Valor 1:" func={setMoeda1} cotacoes={cotacoes} />
      <Moeda titulo="Valor 2:" func={setMoeda2} cotacoes={cotacoes} />

      <Converter
        titulo="Converter"
        func={() => {
          if (!moeda1 || !moeda2 || !valor) {
            setResultado(0);
          } else {
            setResultado((valor * taxas[moeda1]) / taxas[moeda2]);
          }
        }}
      />

      <Resultado
        texto={
          resultado !== null && moeda2
            ? `${moeda2 === 'BRL' ? 'R$' :
                moeda2 === 'USD' ? 'U$' :
                moeda2 === 'EUR' ? 'EU$' :
                moeda2 === 'BTC' ? 'BTC' : ''} ${resultado.toFixed(2)}`
            : ''
        }
      />
    </View>
  );
}

