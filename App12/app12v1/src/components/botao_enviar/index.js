import {Pressable,View,Text} from 'react-native'
import {styles} from './styles'

export default function Enviar( {func,texto} ){
  return(
    <Pressable style = {styles.botao} onPress={func} >
      <Text style = {styles.texto}>{texto}</Text>
    </Pressable>
  )

}