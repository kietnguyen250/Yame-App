import { StyleSheet, Dimensions, Platform } from 'react-native';

const {width} = Dimensions.get('screen');
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#26292b',
        alignItems: 'center'
      },

      header: {
        width,
        height: 60,
        backgroundColor: 'black',
        
        alignItems: 'center',
        padding: 5,
      },

      textHeader: {
        fontSize: 27,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
      },


      listContainer: {
          marginVertical: 8,
          marginHorizontal: 5,
          backgroundColor: '#212529',
          borderRadius: 8,
          
      },

      thumb: {
        
        alignItems: 'center',
        width: width*0.93,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        
      },

      info: {
        padding: 8
      },

      add_cart: {
        position: 'absolute',
        bottom:10,
        right:10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      
      },

      fab: {
        position: 'absolute',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        top: 10,
        // borderRadius: 50,
        // backgroundColor: 'gray',
        
      },

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

      textFab: {
        color: 'white',
        fontSize: 25,
        resizeMode: 'contain',
        alignContent: 'center',
        
        
      },
      centeredView: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
      },
      modalView: {
        alignContent: 'center',

      },
      modalText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 8,
        marginHorizontal: 8
      },
      lineDialog: {
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 8,
        padding: 10
      },
      textDialog: {

      },
      textInputDialog: {
        color: 'black'
      },
      modelButton: {
        
        padding: 16
      },
      openButton: {

      },
      textStyle: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 20
      }

    //   listContainer: {
    //     backgroundColor: '#f1f1f1',
    //     flexDirection: 'row',
    //     margin: width * 3.6 / 187.5,
    //     padding: width * 3.6 / 187.5,
    //     borderRadius: width * 3.6 / 187.5
    //   }
});