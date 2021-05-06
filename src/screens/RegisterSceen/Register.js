import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, ToastAndroid } from 'react-native';
import dataConfig from '../../DataFirebase/firebase';

import axios from 'axios';
// import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import styles from './StyleRegister';



const Register = ({ navigation }) => {
  const [ username, setUsername ] = useState();
  const [ password, setPassword ] = useState();

  const _register = async (username, password) => {
      if(username == null || password == null){
            console.log('Vui lòng nhập đủ!');
            ToastAndroid.show('Vui lòng nhập đủ!', ToastAndroid.SHORT);
      }
      else{
            await axios.post('http://10.0.2.2:3000/users', {
                  userName: username,
                  password: password
                })
                .then(function (response) {
                  navigation.navigate('SignIn');
                  console.log("Đăng kí thành công! ");
                  ToastAndroid.show('Đăng kí thành công! ', ToastAndroid.SHORT);
                })
                .catch(function (error) {
                  ToastAndroid.show('Đăng kí thất bại! '+error, ToastAndroid.SHORT);
                  console.log("Đăng kí thất bại! "+error);
                });
                
      }
      
    }

//   const user = {
//         userName: username,
//         password: password
//   }

//   useEffect(() => {

//       axios.get('http://10.0.2.2:3000/users')
//       .then(function (response) {
//             // handle success
//             alert(JSON.stringify(response.data));
//           })
//           .catch(function (error) {
//             // handle error
//             console.log("Đăng nhập thất bại! "+error);
//           })
//           .finally(function () {
//             // always executed
//             alert('Finally called');
//           });
      
//   });

//   console.log(user);

    return(
      <View style={styles.container}>
        <View style={styles.header}>
                <Text style={styles.text_header}>Register</Text>
              </View>

              <View style={styles.footer}>
              <Text style={styles.text_footer}>Username</Text>
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
                          value={username} onChangeText={(text) => setUsername(text)}
                    />
                    <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                      />

                </View>

                {/* <Text style={[styles.text_footer, {marginTop: 10}]}>Phone Number</Text>
                <View style={styles.action}>
                    <FontAwesome
                          name='phone'
                          color="#05375a"
                          size={20}
                    />
                    <TextInput
                          placeholder="Phone Number"
                          style={styles.textInput}
                          autoCapitalize="none"
                          value={phone} onChangeText={(text) => setPhone(text)}
                    />
                    <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                      />

                </View>

                <Text style={[styles.text_footer, {marginTop: 10}]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                          name='user-o'
                          color="#05375a"
                          size={20}
                    />
                    <TextInput
                          placeholder="Your Email"
                          style={styles.textInput}
                          autoCapitalize="none"
                          value={email} onChangeText={(text) => setEmail(text)}
                    />
                    <Feather
                      name="check-circle"
                      color="green"
                      size={20}
                      />

                </View> */}

                <Text style={[styles.text_footer, {marginTop: 10}]}>Password</Text>

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
                    <TouchableOpacity style={styles.signIn} onPress={() =>  _register(username, password)}>
                          <Text style={styles.textSign}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignIn')}>
                          <Text style={styles.textSignUp}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
              </View>

              </View>
      
      
      
    );
  };
export default Register;

