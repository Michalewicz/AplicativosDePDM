import {View, Text, Image} from 'react-native'
import {useState} from 'react'

import TextInput from './src/textInput/index'
import Botao from './src/button/index'

function App(){
  const [num, setNum] = useState('')
  const [num1, setNum1] = useState('')
  const [res, setRes] = useState('')

  let img = 'https://www.brasilpostos.com.br/wp-content/uploads/2020/04/etanol-ou-gasolina-14-2-1024x512-1.jpg';
  
  function averiguar(){
    if(num === ''){
      alert('Digite o preço do álcool!')
      return;
    } else if(num1 === ''){
      alert('Digite o preço da gasolina')
      return;
    } else if(num/num1 < 0.7){
      setRes('Resultado: Preço do álcool está melhor que o da gasolina');
    } else if(num/num1 >= 0.7){
      setRes('Resultado: Preço da gasolina está melhor que o do álcool');
    }
    
  }
  
  return(
  <View>
      <Image source={{ uri:img }} style={{ width: 250, height: 250}}/>
      <TextInput placeholder = {'Preço do álcool'} funcao = {setNum}/>
      <TextInput placeholder = {'Preço da gasolina'} funcao = {setNum1}/>
      <Botao titulo={'Verificar'} pressionar = {averiguar} />
      <Text>{res}</Text>
  </View>
  )
}

export default App;