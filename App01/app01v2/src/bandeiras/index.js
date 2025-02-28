import {View, Image} from 'react-native'

function Bandeiras(){
  let bandeiraAustria = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_the_Habsburg_Monarchy.svg/langpt-1100px-Flag_of_the_Habsburg_Monarchy.svg.png';
  let bandeiraSIG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg/1200px-Banner_of_the_Holy_Roman_Emperor_with_haloes_%281430-1806%29.svg.png';

  return(
    <View>
      <Image 
        source={bandeiraAustria}
        style={{width:100, height: 100}}
      />
      <Image 
        source={bandeiraSIG}
        style={{width:100, height: 100, marginTop: 3}}
      />
    </View>
  );
}

export default Bandeiras;