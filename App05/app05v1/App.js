import {View, Text, Image} from 'react-native'
import {useState} from 'react'

import TextInput from './src/textInput/index'
import Botao from './src/button/index'

function App(){
  const [num, setNum] = useState('')
  const [num1, setNum1] = useState('')
  const [res, setRes] = useState('')
  let imc;

  let img = 'https://images.squarespace-cdn.com/content/v1/54884604e4b08e455df8d6ff/1454940813608-KCDELGPNXIA95OL57DYU/Classifica%C3%A7%C3%A3o+do+IMC+para+adultos';
  
  function averiguar(){
    if(num === ''){
      alert('Digite o seu peso!')
      return;
    } else if(num1 === ''){
      alert('Digite a sua altura!')
      return;
    }
    imc = num/(num1*num1)
    if(imc < 16){
      setRes('Resultado: Magreza grau III')
    } else if(imc >= 16 && imc <= 16.9){
      setRes('Resultado: Magreza grau II')
    } else if(imc > 16.9 && imc <= 18.4){
      setRes('Resultado: Magreza grau I')
    } else if(imc > 18.4 && imc <= 24.9){
      setRes('Resultado: Eutrofia')
    } else if(imc > 24.9 && imc <= 29.9){
      setRes('Resultado: Pré-obesidade')
    } else if(imc > 29.9 && imc <= 34.9){
      setRes('Resultado: Obesidade grau I')
    } else if(imc > 34.9 && imc <= 39.9){
      setRes('Resultado: Obesidade grau II')
    } else if(imc > 39.9){
      setRes('Resultado: Obesidade grau III')
    }
    
    
  }
  
  return(
  <View>
      <Image source={{ uri:img }} style={{ width: 350, height: 150}}/>
      <TextInput placeholder = {'Peso'} funcao = {setNum}/>
      <TextInput placeholder = {'Altura'} funcao = {setNum1}/>
      <Botao titulo={'Verificar'} pressionar = {averiguar} />
      <Text>{res}</Text>
  </View>
  )
}

export default App;