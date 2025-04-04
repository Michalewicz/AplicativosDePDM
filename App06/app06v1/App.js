import {View, Text, Image} from 'react-native'
import {useState} from 'react'

import TextInput from './src/textInput/index'
import Botao from './src/button/index'

function App() {
  const [numeroEscolhido, setNumeroEscolhido] = useState('');
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [resultado, setResultado] = useState('');

  let img = 'https://static.todamateria.com.br/upload/po/nt/ponto-de-interrogacao-og.jpg?class=ogImageRectangle'
  
  function descobrir() {
    const numeroAleatorio = Math.floor(Math.random() * 11);
    setNumeroSorteado(numeroAleatorio);
    
    if (parseInt(numeroEscolhido) === numeroAleatorio) {
      setResultado('Parabéns! Você acertou!');
    } else {
      setResultado(`Errou! O número era ${numeroAleatorio}`);
    }
  }

  return (
    <View>
      <Text>Jogo do Nº Aleatório</Text>
      
      <Image source={{ uri:img }} style={{ width:500, height:200 }}/>
      
      <Text>Pense em um nº de 0 a 10</Text>
      
      <TextInput placeholder = {'Digite um número de 0 a 10'} funcao = {setNumeroEscolhido}/>
      <Botao titulo={'Descobrir'} pressionar = {descobrir} />

      {resultado ? <Text>{resultado}</Text> : null}
    </View>
  );
}

export default App;