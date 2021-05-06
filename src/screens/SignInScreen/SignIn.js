import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid, Image } from 'react-native';
import dataConfig from '../../DataFirebase/firebase';

import axios from 'axios';
// import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from './StyleSignIn';

// const logIn = async (email, password, {navigation}) => {
//   await dataConfig.auth()
//         .signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           var user = userCredential.user;

//           console.log('Đăng nhập thành công')
//           ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
//           navigation.navigate('BottomNavigation');
//           return true;
//         })
//         .catch((error) => {
//           const { code, massage } = error;
//           ToastAndroid.show('Wrong email or password! '+massage, ToastAndroid.SHORT);
//           return false;
//         })
        
// }



const SignIn = ({ navigation }) => {
  const [ username, setUername ] = useState();
  const [ password, setPassword ] = useState();

  const [ dataUser, setDataUser ] = useState([]);
  
  useEffect(() => {

    fetch('http://10.0.2.2:3000/users')
    .then((res) => res.json())
    .then((json) => setDataUser(json))
    .catch((err) => console.log(err));
    
}, [dataUser]);

  // console.log(data);

  const _login = (username, password) => {
    const data = dataUser.find((v) => v.userName == username && v.password == password);
    if(username == null || password == null){
      console.log('Vui lòng nhập đủ!');
      ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
    } 
    else if(data){
          navigation.navigate('BottomNavigation');
          ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
          console.log('Đăng nhập thành công!');
    }
    else {
          ToastAndroid.show('Sai username hoặc password!', ToastAndroid.SHORT);
          console.log('Sai username hoặc password!');
    }
              
    
    
  }

  //function check login
  const checkLogin = () => {
    if (_login(username, password, {navigation})){
      // navigation.navigate('BottomNavigation');
      
    }
    else {
      
    }
  };

  // const login = ( email, password ) => {
  //   if(email)
  // }

    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
              <FontAwesome
                    name='user'
                    color="#05375a"
                    size={20}
              />
              <TextInput
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={username} onChangeText={(text) => setUername(text)}
              />
              <Feather
                name="check-circle"
                color="green"
                size={20}
                />

          </View>

          <Text style={[styles.text_footer, {marginTop: 25}]}>Password</Text>

          <View style={styles.action}>
              <FontAwesome
                    name='lock'
                    color="#05375a"
                    size={20}
              />
              <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    secureTextEntry= {true}
                    autoCapitalize="none"
                    value={password} onChangeText={(text) => setPassword(text)}
              />
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                />

          </View>
          <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={() => checkLogin()}>
                    <Text style={styles.textSign}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
          </View>
        </View>

      </View>
      
      
    );
  };

export default SignIn;


