import { View, Button, Text } from 'react-native'
import { styles } from './styles'

export default function Converter({titulo,func}) {
  return (
    <View style={styles.container}>
      <Button onPress={func} title = {titulo} ></Button>
    </View>
  )
}