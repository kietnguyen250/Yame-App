import { StyleSheet, Dimensions } from 'react-native';

// import { useFonts } from 'expo-font';

// const [loaded] = useFonts({ 
//     Rockone: require('../../../../assets/font/RockOneRegular.ttf'),
// });
// if (!loaded) {
//   return null;
// }

const { height } = Dimensions.get("screen");
const height_logo = height * 0.3;
const width_logo = height * 0.55;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: width_logo,
    height: height_logo
  },
  title: {
    color: '#1a1a1a',
    fontSize: 30,
    fontWeight: 'bold',
  },

  name: {
    color: '#1a1a1a',
    fontSize: 50,
    fontWeight: 'bold',
    // fontFamily: 'Rockone'
  },
  
  text: {
    color: 'grey',
    marginTop: 10
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 0,
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor:'#1a1a1a'
  },
  textSign: {
    
    color: 'white',
    fontWeight: 'bold'
  }

});