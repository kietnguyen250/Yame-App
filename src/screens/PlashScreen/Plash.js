import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState,  } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid, Image } from 'react-native';
import dataConfig from '../../DataFirebase/firebase';
// import { useFonts } from 'expo-font';

// import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './StylePlash';



const Plash = ({ navigation }) => {

  // const [loaded] = useFonts({ 
  //   Rockone: require('../../../../assets/font/RockOneRegular.ttf'),
  // });
  // if (!loaded) {
  //   return null;
  // };

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            // animation="bounceIn"
            // duration='1500'
            source={require('../../Images/yameLogo.jpg')}
            style={styles.logo}
            resizeMode='stretch'
            />
        </View>

        <View style={styles.footer}>
          <Text style={{color: '#1a1a1a', fontSize: 50, fontWeight: 'bold'}}>YAME</Text>
          <Text style={styles.title}>You are my everything</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons 
                  name='navigate-next'
                  color='#fff'
                  size={20}
                />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      
      
    );
  };

export default Plash;


