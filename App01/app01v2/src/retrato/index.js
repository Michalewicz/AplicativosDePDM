import {View, Image, Text} from 'react-native'

function Retrato(props){
  let fotoPerfil = 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Francis_II%2C_Holy_Roman_Emperor_at_age_25%2C_1792.png';

  return(
    <View>
      <Text style={{fontSize: 25, margin: 30}}>Nome: {props.nomeImperador} da <Text style={{fontSize: 25, color:'#FFCC00'}}>Áustria</Text></Text>
      <Image 
        source={fotoPerfil} 
        style={{width:200, height: 300, marginStart: 30}}
      />
    </View>
  );
}

export default Retrato;