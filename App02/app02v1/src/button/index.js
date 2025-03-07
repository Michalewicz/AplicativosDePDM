import React, { useState } from 'react';
import {View, Button, Text} from 'react-native'


function Botao(props){
  const [qtdPessoa, setQtdPessoa] = useState(0)

  function adicao(){
    setQtdPessoa(qtdPessoa+1)
  }
  function subtracao(){
    setQtdPessoa(qtdPessoa-1)
  }

  return(
    <View>
      <Text style={{fontSize: 50, textAlign: 'center'}}>{qtdPessoa}</Text>
      <Button title={props.nome1} color={props.cor1} onPress={adicao} /> 
      <Button title={props.nome2} color={props.cor2} onPress={subtracao} /> 
    </View>
    )
}

export default Botao;