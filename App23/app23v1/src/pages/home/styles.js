import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 3,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});

export {styles}
