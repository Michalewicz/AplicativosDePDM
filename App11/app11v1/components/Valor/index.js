import { View, TextInput, Text } from 'react-native'
import { styles } from './styles'

export default function Valor({titulo,func}) {
  return (
    <View style={styles.container_valor}>
        <Text style={styles.label_valor}>Valor</Text>
        <TextInput style={styles.caixa_valor} onChangeText = {func} />
      </View>
  )
}