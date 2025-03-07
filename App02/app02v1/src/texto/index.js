import {View, Text} from 'react-native'


function Texto(props){
  return(
    <View>
      <Text style={{fontSize: 35, textAlign: 'center'}}>{props.nome}</Text>
    </View>
    )
}

export default Texto;