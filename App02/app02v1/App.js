
import {View} from 'react-native'

import Botao from './src/button'
import Texto from './src/texto'

function App(){
  return(
  <View>
    <Texto nome = {'Contador de Pessoas'}/>
    <Botao nome1 = {'+'} cor1 = {'darkblue'} nome2 = {'-'} cor2 = {'darkred'}/>
  </View>
  )
}

export default App;