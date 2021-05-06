import { StyleSheet, Dimensions, Platform } from 'react-native';

const {width} = Dimensions.get('screen');
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      },

      header: {
        width,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 5,
      },

      textHeader: {
        position: 'absolute',
        right: 15,
        top: 10,
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',

      },


    //   fab: {
    //     position: 'absolute',
    //     width: 40,
    //     height: 40,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     right: 10,
    //     top: 10,
    //     // borderRadius: 50,
    //     // backgroundColor: 'gray',
        
    //   },

      logo: {
        position: 'absolute',
        width: 75,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        left: 10,
        top: 10,
        // borderRadius: 50,
        // backgroundColor: 'gray',
        
      },

      text: {
        color: 'black',
        fontSize: 25,
        
      }, 
});