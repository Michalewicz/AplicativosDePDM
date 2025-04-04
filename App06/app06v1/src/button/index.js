import {View, Button} from 'react-native'

function Botao(props){

  return(
  <View>
      <Button title={props.titulo} color="darkblue" onPress={props.pressionar}/>
  </View>
  )
}

export default Botao;