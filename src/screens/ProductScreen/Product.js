import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
// import Swipeout from 'react-native-swipeout';
import styles from './StyleProduct';

import axios from 'axios';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Product = ({navigation}) => {

    
    const [ data, setData ] = useState([]);
 

    const getAllProduct = () => {
        // firebaseConfig.database().ref().child('Products').on('value', (snap) => {
        //     var items = [];
        //     snap.forEach((child) => {
        //         let item = {
        //             key: child.key,
        //             name: child.val().name,
        //             image: child.val().image,
        //             price: child.val().price,
        //             material: child.val().material
        //         };
        //         items.push(item);
        //     });
        //     setData(items);
        // });

        
        
        // axios.get('http://10.0.2.2:3000/api/products')
        // .then(res => {
        // const products = res.data;
        // setData({ products });
        // })
    };
    useEffect(() => {
        // fetch('http://10.0.2.2:3000/api/products')
        //     .then((response) => response.json())
        //     .then((json) => setData(json))
        //     .catch((error) => console.error('>>>>>>>>', error));

        axios.get('http://10.0.2.2:3000/api/products')
        .then(res => {
        const item = res.data;
        setData(item);
        })

        // YellowBox.ignoreWarnings([ 'Setting a timer', 'Warning:' ]);
    }, []);
    
    // console.log(data);
    // ToastAndroid.show("DATA: "+data.toString(), ToastAndroid.SHORT);

    const renderItem = ({item}) => {
        // <ListItem item={item} />
        const onPress = (item) => {
            navigation.navigate('Detail', {item: item})
        }
        return(
            <SafeAreaView style={styles.listContainer}>
                
                <Image
                    style={styles.thumb}
                    width={400}
                    height={250}
                    source={{uri: "http://10.0.2.2:3000/assets/images/"+item.imgProduct}}
                    
                   
                />
                {/* <Text style={{margin: 8, fontSize: 20, fontWeight: 'bold', color: 'white', textAlign:'center', fontFamily: 'NewTegomin.tff'}}>
                            {item.imgProduct}
                </Text> */}

                    <View style={styles.info}>
                        <Text style={{margin: 8, fontSize: 20, fontWeight: 'bold', color: 'white', textAlign:'center', fontFamily: 'NewTegomin.tff'}}>
                            {item.nameProduct}
                        </Text>
                        {/* <Text style={{marginLeft: 10, color: 'grey' }}>Chất liệu: {props.item.material}</Text> */}
                        <View style={{marginLeft: 10, marginTop:15, marginBottom:10, flexDirection:'row'}}>
                            <MaterialCommunityIcons name="sack" color={"gray"} size={22}/>
                            <Text style={{ color: 'gray', fontSize: 17, marginLeft:3 }}>{item.price}$</Text>

                        </View>
                        
                        <TouchableOpacity
                            style={styles.add_cart}
                            onPress={() => onPress(item)}>
                            <MaterialCommunityIcons name="alert-circle-outline" color={"gray"} size={30}/>
                        </TouchableOpacity>
                
                    </View>
            </SafeAreaView>
        )
        
        
    }

    return(
        <View style={styles.container}>

            {/* <Text style={styles.text}></Text> */}
            <View style={styles.header}>
                <Image
                // animation="bounceIn"
                // duration='1500'
                source={require('../../Images/yameLogo.jpg')}
                style={styles.logo}
                resizeMode='stretch'
                />
                {/* <MaterialCommunityIcons style={styles.logo} name="incognito" color={"#868977"} size={40}/> */}
                <Text style={styles.textHeader}>Yame</Text>
                <TouchableOpacity
                style={styles.fab}
                onPress={() => {
                    
                    // _showDialog();
                    // ProductInsert(name, image, price, material);
                }}  >
                    <MaterialCommunityIcons name="cart-outline" color={"#868977"} size={35}/>
                </TouchableOpacity>
            </View>
            
            <FlatList data={data} renderItem={ renderItem } keyExtractor={(item) => item._id } />
            
    
        </View>
    );

};

//Icon FlatList function
const ListItem = ({item}) => {
    
    return (

        <SafeAreaView style={styles.listContainer}>
                
        <Image
            style={styles.thumb}
            width={400}
            height={250}
            source={{uri: "http://10.0.2.2:3000/assets/images/"+item.imgProduct}}
            
           
        />
        {/* <Text style={{margin: 8, fontSize: 20, fontWeight: 'bold', color: 'white', textAlign:'center', fontFamily: 'NewTegomin.tff'}}>
                    {item.imgProduct}
        </Text> */}

            <View style={styles.info}>
                <Text style={{margin: 8, fontSize: 20, fontWeight: 'bold', color: 'white', textAlign:'center', fontFamily: 'NewTegomin.tff'}}>
                    {item.nameProduct}
                </Text>
                {/* <Text style={{marginLeft: 10, color: 'grey' }}>Chất liệu: {props.item.material}</Text> */}
                <View style={{marginLeft: 10, marginTop:15, marginBottom:10, flexDirection:'row'}}>
                    <MaterialCommunityIcons name="sack" color={"gray"} size={22}/>
                    <Text style={{ color: 'gray', fontSize: 17, marginLeft:3 }}>{item.price}$</Text>

                </View>
                
                <TouchableOpacity
                    style={styles.add_cart}
                    onPress={() => {
                        
                        // _showDialog();
                        // ProductInsert(name, image, price, material);
        }}  >
            <MaterialCommunityIcons name="alert-circle-outline" color={"gray"} size={30}/>
        </TouchableOpacity>
        
            </View>
    </SafeAreaView>

    );
};

export default Product;
