import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#1a1a1a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#1a1a1a',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: -5,
      paddingLeft: 10,
      color: '#1a1a1a'
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor:'#1a1a1a'
  },
  textSign: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    marginTop: 15,
    backgroundColor:'white'
},
    textSignUp: {
    color: '#1a1a1a',
    fontSize: 18,
    fontWeight: 'bold'
}
});