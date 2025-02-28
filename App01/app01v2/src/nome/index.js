import {View, Text} from 'react-native'

function Nome(){
  return(
    <View>
      <Text style={{fontSize: 25, margin: 30}}>Nome: Francisco I da <Text style={{fontSize: 25, color:'#FFCC00'}}>Áustria</Text></Text>
    </View>
  );
}

export default Nome;