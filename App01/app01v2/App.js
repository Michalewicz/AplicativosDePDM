import {View} from 'react-native'

import Retrato from './src/retrato'
import Titulo from './src/titulo'
import Bandeiras from './src/bandeiras'

function App(){
  return(
  <View>
    <Retrato nomeImperador = {'Francisco I'}/>
    <Titulo titulo = {'Títulos: Imperador da Áustria; Rei de Jerusalém, Hungria, Boêmia, Dalmácia, Croácia, Eslavônia, Galícia e Lodoméria; Arquiduque da Áustria; Duque de Lorena, Salzburgo, Wurtzburgo, Francônia, Estíria, Caríntia e Carníola; Grão-Duque de Cracóvia; Grão-príncipe da Transilvânia, marquês da Morávia, Duque de Sandomir, Masóvia, Lublin, Alta e Baixa Silésia, Duque da Galícia Ocidental; Príncipe de Berchtesgaden e Mergentheim; conde principesco de Habsburgo, Gorizia e Gradisca e do Tirol, e marquês de Alta e Baixa Lusácia e da Ístria.'}/>
    <Bandeiras altura = {100} largura = {100}/>
  </View>
  )
}

export default App;