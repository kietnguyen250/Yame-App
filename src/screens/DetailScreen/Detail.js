import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid, Image, SafeAreaView } from 'react-native';
import styles from './StyleDetail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Detail = ({navigation, route }) => {
    const { item: product } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.logo} onPress={() => navigation.navigate('Product')}>
                    <MaterialCommunityIcons name="arrow-left" color={"white"} size={35}/>
                </TouchableOpacity>
            
                <Text style={styles.textHeader}>Detail</Text>
                
            </View>


            
                <Image
                        style={styles.thumb}
                        height={350}
                        source={{uri: "http://10.0.2.2:3000/assets/images/"+product.imgProduct}}
                    
                />
                    <Text style={styles.textName}>{product.nameProduct}</Text>




                <View style={styles.infor}>
                    <View style={styles.row}>
                        <Text style={styles.textMaterial}>{product.material}</Text>
                        <Text style={styles.textPrice}>{product.price}$</Text>
                    </View>
                    
                   
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.buy} onPress={() => ToastAndroid.show('Chức năng chưa cập nhật!', ToastAndroid.SHORT)}>
                        <MaterialCommunityIcons style={{marginHorizontal: 10}} name="cart-plus" color={"white"} size={30} />
                        <Text style={styles.textBuy}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>

                    <Text style={styles.textHDSD}>HDSD:
                        Giặt tay để sản phẩm giữ được độ bền cao
                    </Text>

                
            
            
            
        </View>
        )
};

export default Detail;