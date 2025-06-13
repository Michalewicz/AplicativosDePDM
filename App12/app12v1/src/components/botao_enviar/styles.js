import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  botao: {
    marginTop: 15,
    backgroundColor: 'rgb(25,120,200)',
    width: 250,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 10,
  },
});
export { styles };
