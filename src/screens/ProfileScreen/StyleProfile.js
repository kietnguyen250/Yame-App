import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212529',
        alignItems: 'center',
        
        
      },
      text: {
          fontSize: 30,
        fontWeight: 'bold',
      },

      avtView: {
          height: 185,
          alignItems: 'center',
          width: 185,
          borderRadius: 185,
          marginVertical: 30,
          marginTop: 30,
          borderWidth: 2,
          borderColor: 'grey'
      },
      avtImg: {
          height: 180,
          // alignItems: 'center',
          width: 180,
          borderRadius: 180,
          // marginVertical: 30,
          // marginTop: 80,
          // borderWidth: 2,
          
      },

      viewpf: {
        flexDirection: 'row',
        padding: 3,
        backgroundColor: '#212529'
      },

      textpf: {
          color: 'white',
          fontSize: 20,
          marginHorizontal: 3,
          fontFamily: 'RockOneRegular'
      },

      editView: {
        flexDirection: 'row',
        padding: 3,

      },
      editText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: '#868977'
      },

      
      menu: {
        padding: 5,
        width,
        height: 150,
        marginVertical: 10,
        backgroundColor: '#212529'
      },

      address: {
        width,
        height: 50,
        alignItems: 'center',
        borderRadius: 1,
        backgroundColor:'white',
        marginVertical: 10,     
        flexDirection: 'row',
        backgroundColor: '#212529'
    },

    textMenu: {
      fontSize: 20,
      alignItems: 'center',
      width: '75%',
      textAlign: 'center',
      color: '#868977'
      
    },

    button: {
      alignItems: 'center',
      marginTop: 50,
      width: '85%',
      
      
    },


      signOut: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        backgroundColor:'#1a1a1a',
        marginVertical: 50,
        flexDirection: 'row'
    },
    textSignOut: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',

  }
});