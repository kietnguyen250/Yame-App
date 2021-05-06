import { StyleSheet, Dimensions, Platform } from 'react-native';

const {width} = Dimensions.get('screen');
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212529',
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

      scrollView: {
        top: 0,
        left: 0, 
        bottom: 0, 
        right: 0},

      thumb: {
        height: 300,
        alignItems: 'center',
        width: "100%",
        marginVertical: 8
        // borderTopLeftRadius: 5,
        // borderTopRightRadius: 5,    
      },

      row: {
        width: "100%",
        flexDirection: 'row',
      },
      rowpd: {
        width: "50%",
        flexDirection: 'row',
      },

      line: {
        marginHorizontal: 4
      },
      line1: {
        marginHorizontal: 2
      },
      line2: {
        marginHorizontal: 5
      },
      thumbmini: {
        height: 150,
        alignItems: 'center',
        marginVertical: 3,
        width: "50%",
        
      },

      thumbpd: {
        height: 150,
        alignItems: 'center',
        marginVertical: 3,
        width: "49%",
        
      },

      textHeader: {
        fontSize: 27,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
      },
      text: {
        fontSize: 30,
        fontWeight: 'bold',
      },
      contentText: {
        marginTop: 15,
        width: '50%',
        fontSize: 17,
        color: '#868977',
      },
      toptieuDe: {
        alignItems: 'center',
        marginVertical: 12

      },
      textToptieuDe: {
        fontSize: 20,
        color: '#868977'
      },
      topnoidung: {
        alignItems: 'center',
        marginBottom: 8

      },
      textTopnoidung: {
        fontSize: 15,
        color: '#868977'
      },

      sale: {
        alignItems: 'center',
        marginVertical: 8

      },

      textsale: {
        fontSize: 15,
        color: '#868977'
      },

      ngay: {
        alignItems: 'center',
        marginBottom: 12
      },

      textngay: {
        fontSize: 12,
        color: '#868977',
        textAlign: 'center'
      },

      rowHOT: {
        width: "95%",
        flexDirection: 'row',
        marginVertical: 5,
        alignSelf: 'center',
        alignContent:'center',
        alignItems: 'center'

      },

      thumbHOT: {
        height: 170,
        marginVertical: 1,
        marginHorizontal: '1.3%',
        width: "30%",
        
      },
});