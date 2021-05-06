import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212529',
        // alignItems: 'center',
        
        
      },
      header: {
        width,
        height: 60,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 5,
        alignContent:'center'
      },

      textHeader: {
        // position: 'absolute',
        // right: 15,
        // top: 10,
        marginTop: 5,
        alignItems:'center',
        alignSelf:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',

      },

      logo: {
        position: 'absolute',
        width: 75,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        top: 15,
        // borderRadius: 50,
        // backgroundColor: 'gray',
        
      },

      text: {
        color: 'black',
        fontSize: 25,
        
      },
      
      thumb: {
        height: 350,
        alignSelf:'center',
        alignItems: 'center',
        width: "97%",
        marginVertical: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5    
      },
      row: {
        width: "95%",
        flexDirection: 'row',
        marginVertical: 10
      },
      textName: {
        width:"100%",
        color: 'white',
        fontSize: 27,
        marginVertical:5,
        marginHorizontal:10,
        textAlign: 'center'

      },
      textPrice: {
        width: "27.5%",
        color:'grey',
        fontSize: 18,
        marginVertical:10,
        marginHorizontal:10,
        marginTop: 20,
        textAlign:'center'
      },

      textHDSD: {
        bottom:10,
        color:'grey',
        fontSize: 17,
        marginVertical: 8,
        textAlign:'center',
        marginTop:70
        
      },

      textMaterial: {
        width:"67.5%",
        color: 'grey',
        fontSize: 18,
        marginVertical:10,
        marginHorizontal:10,
        marginTop: 20
        
      },
      button: {
        alignItems: 'center',
        marginTop: 70,
        width: '85%',
        alignSelf:'center'
      },
  
  
        buy: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 1,
          backgroundColor:'#1a1a1a',
          marginVertical: 20,
          flexDirection: 'row'
      },
      textBuy: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
  
    }

});
