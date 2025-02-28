import {View} from 'react-native'

import NomeImperador from './src/nome'
import Retrato from './src/retrato'
import Titulo from './src/titulo'
import Imperador from './src/imperador'
import Bandeiras from './src/bandeiras'

function App(){
  return(
  <View>
    <NomeImperador />
    <Retrato />
    <Titulo />
    <Imperador />
    <Bandeiras />
  </View>
  )
}

export default App;