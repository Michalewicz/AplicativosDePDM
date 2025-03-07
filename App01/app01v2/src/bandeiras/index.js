import {View, Image, Text} from 'react-native'

function Bandeiras(props){
  let bandeiraAustria = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Habsburg_Monarchy.svg/langpt-1100px-Flag_of_the_Habsburg_Monarchy.svg.png';
  let bandeiraSIG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg/1200px-Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg.png';

  return(
    <View>
      <Text style={{fontSize:25, margin: 30}}>Imperador do <Text style={{fontSize:25, color:'#FFCC00'}}>Sacro Império Germânico e Áustria</Text></Text>
      <Image 
        source={bandeiraAustria}
        style={{width:props.largura, height: props.altura}}
      />
      <Image 
        source={bandeiraSIG}
        style={{width:props.largura, height: props.altura, marginTop: 3}}
      />
    </View>
  );
}

export default Bandeiras;