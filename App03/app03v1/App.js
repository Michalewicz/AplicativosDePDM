import {View, Text} from 'react-native'
import {useState} from 'react'

import TextInput from './src/textInput/index'
import Botao from './src/button/index'

function App(){
  const [num, setNum] = useState('')
  const [num1, setNum1] = useState('')
  const [res, setRes] = useState('')
  
  function multiplicador(){
    if(num1 === ''){
      alert('Digite os números!')
      return;
    }
    setRes('Resultado: '+num * num1);
  }
  
  return(
  <View>
      <TextInput placeholder = {'Digite um número'} funcao = {setNum}/>
      <TextInput placeholder = {'Digite outro número'} funcao = {setNum1}/>
      <Botao titulo={'Calcular'} pressionar = {multiplicador} />
      <Text>{res}</Text>
  </View>
  )
}

export default App;