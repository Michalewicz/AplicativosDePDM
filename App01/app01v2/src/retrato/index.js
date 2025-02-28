import {View, Image} from 'react-native'

function Retrato(){
  let fotoPerfil = 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Francis_II%2C_Holy_Roman_Emperor_at_age_25%2C_1792.png';

  return(
    <View>
      <Image 
        source={fotoPerfil} 
        style={{width:200, height: 300, marginStart: 30}}
      />
    </View>
  );
}

export default Retrato;