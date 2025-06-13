import {Text} from 'react-native'
import { styles } from './styles'

export default function Resultado({texto}) {
  return (
      <Text style={styles.label}>{texto}</Text>
  )
}