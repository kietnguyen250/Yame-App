import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Dimensions, FlatList, ToastAndroid, Modal, YellowBox } from 'react-native';
import Swipeout from 'react-native-swipeout';
import styles from '../MainScreen/ProductScreen/StyleProduct';
import ProductDAO from '../DAO/ProductDAO';

import firebaseConfig from '../../DataFirebase/firebase';
import * as ImagePicker from 'expo-image-picker';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


//Insert
// const ProductInsert = (props) => {
//     const [name, setName] = useState();
//     const [image, setImage] = useState('https://reactjs.org/logo-og.png');
//     const [price, setPrice] = useState();
//     const [material, setMaterial] = useState();

//     //choose image
//     const _chooseImage = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [ 4, 3 ]
//         });
//         if (!result.cancelled)  {
//             console.log(image);
//             setImage(result.uri);
//         }
//     };

//     return (
//         <View style={styles.centeredView} >
//             <View style={styles.modalView} >
//                 <Text style={styles.modalText}>ADD PRODUCT</Text>
//                 <TouchableOpacity onPress={() => _chooseImage()} >
//                     <Image 
//                         source={{ uri: image, width: 150, height: 150}}
//                         style={{ borderWidth: 1, borderColor: 'black', margin: 10}}
//                     />
//                 </TouchableOpacity>

//                 <View style={styles.lineDialog}>
                    
//                     <TextInput style={styles.textInputDialog} placeholder="Input name..." value={name} onChangeText={(text) => setName(text)} />
//                 </View>

//                 <View style={styles.lineDialog}>
                    
//                     <TextInput style={styles.textInputDialog} placeholder="Input price..." value={price} onChangeText={(text) => setPrice(text)} />
//                 </View>

//                 <View style={styles.lineDialog}>
                    
//                     <TextInput style={styles.textInputDialog} placeholder="Input material..." value={material} onChangeText={(text) => setMaterial(text)} />
//                 </View>

//                 <View style={styles.modelButton}>
                    

//                     <TouchableOpacity
//                         style={{ ...styles.openButton, backgroundColor: 'black', padding: 8, marginVertical: 4}}
//                         onPress={() => {
//                             props._hideDialog();
//                             ProductDAO.insert(name, image, price, material);
//                         }} >

//                             <Text style={styles.textStyle}>ADD</Text>

//                         </TouchableOpacity>

//                     <TouchableOpacity
//                         style={{ ...styles.openButton, backgroundColor: 'black', padding: 8, marginVertical: 4}}
//                         onPress={() => {
//                             props._hideDialog();
//                         }}
//                         >
//                             <Text style={styles.textStyle}>Cancel</Text>

//                     </TouchableOpacity>
//                 </View>

//             </View>
//         </View>
//     )
// };



// Update
const ProductUpdate = (props) => {
    const [ key, setKey ] = useState(props.item.key);
    const [ name, setName ] = useState(props.item.name);
    const [ image, setImage ] = useState(props.item.image);
    const [ price, setPrice ] = useState(props.item.price);
    const [ material, setMaterial ] = useState(prop.item.material);

    //choose image
    const _chooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [ 4, 3 ]
        });
        if (!result.cancelled)  {
            console.log(image);
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.centeredView} >
            <View style={styles.modalView} >
                <Text style={styles.modalText}>UPDATE PRODUCT</Text>
                <TouchableOpacity onPress={() => _chooseImage()} >
                    <Image 
                        source={{ uri: image, width: 150, height: 150}}
                        style={{ borderWidth: 1, borderColor: 'black', margin: 10}}
                    />
                </TouchableOpacity>

                <View style={styles.lineDialog}>
                    
                    <TextInput style={styles.textInputDialog} placeholder="Input name..." value={name} onChangeText={(text) => setName(text)} />
                </View>

                <View style={styles.lineDialog}>
                    
                    <TextInput style={styles.textInputDialog} placeholder="Input price..." value={price} onChangeText={(text) => setPrice(text)} />
                </View>

                <View style={styles.lineDialog}>
                    
                    <TextInput style={styles.textInputDialog} placeholder="Input material..." value={material} onChangeText={(text) => setMaterial(text)} />
                </View>

                <View style={styles.modelButton}>
                    

                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: 'black', padding: 8, marginVertical: 4}}
                        onPress={() => {
                            props._hideDialog();
                            ProductDAO.update(key, name, image, price, material);
                        }} >

                            <Text style={styles.textStyle}>UPDATE</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: 'black', padding: 8, marginVertical: 4}}
                        onPress={() => {
                            props._hideDialog();
                        }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>

                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};


export default ProductUpdate;