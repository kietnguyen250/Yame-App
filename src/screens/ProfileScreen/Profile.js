import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid, Image } from 'react-native';
import styles from './StyleProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dataConfig from '../../DataFirebase/firebase';
import Header from '../Header/Header';


const _logOut = () => {

    dataConfig.auth().signOut().then(() => {
        // Sign-out successful.
        ToastAndroid.show('Đã đăng xuất!', ToastAndroid.SHORT);
      }).catch((error) => {
        // An error happened.
      });

}
const Profile = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.avtView}>
                <Image
                    style={styles.avtImg}
                    width={180}
                    height={180}
                    source={{uri: "https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png"}}
                   
                />
            </View>

            <View style={styles.viewpf}>
            <MaterialCommunityIcons name="information" color={"red"} size={25} />
                <Text style={styles.textpf}>
                    Your profile is 80% completed.
                </Text>
            </View>
            

            <TouchableOpacity style={styles.editView} onPress={() =>  ToastAndroid.show('Open edit profile', ToastAndroid.SHORT)}>
                <MaterialCommunityIcons name="pencil" color={"gray"} size={25} />
                <Text style={styles.editText}>EDIT PROFILE</Text>
            </TouchableOpacity>

                <View style={styles.menu}>
                <TouchableOpacity style={styles.address} onPress={() =>  ToastAndroid.show('Manage Address', ToastAndroid.SHORT)}>
                    <MaterialCommunityIcons style={{marginHorizontal: 10}} name="home" color={"#868977"} size={35} />
                    <Text style={styles.textMenu}>Manage Address</Text>
                    <MaterialCommunityIcons name="chevron-right" color={"#868977"} size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.address} onPress={() =>  ToastAndroid.show('Favorites', ToastAndroid.SHORT)}>
                    <MaterialCommunityIcons style={{marginHorizontal: 10}} name="star" color={"#868977"} size={35} />
                    <Text style={styles.textMenu}>Favorites</Text>
                    <MaterialCommunityIcons name="chevron-right" color={"#868977"} size={30} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.address} onPress={() =>  ToastAndroid.show('Settings', ToastAndroid.SHORT)}>
                    <MaterialCommunityIcons style={{marginHorizontal: 10}} name="cog" color={"#868977"} size={35} />
                    <Text style={styles.textMenu}>Settings</Text>
                    <MaterialCommunityIcons name="chevron-right" color={"#868977"} size={30} />
                </TouchableOpacity>

            </View>


            <View style={styles.button}>
                <TouchableOpacity style={styles.signOut} onPress={() =>  _logOut()}>
                    <MaterialCommunityIcons style={{marginHorizontal: 10}} name="export" color={"white"} size={30} />
                    <Text style={styles.textSignOut}>SIGN OUT</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        )
};

export default Profile;