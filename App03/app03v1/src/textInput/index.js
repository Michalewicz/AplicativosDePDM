import {View, TextInput} from 'react-native'

function EntradaDados(props){

  return(
  <View>
      <TextInput placeholder = {props.placeholder} onChangeText = {props.funcao}/>
  </View>
  )
}

export default EntradaDados;