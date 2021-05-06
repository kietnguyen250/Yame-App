import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';


// import HomeScreen from './components/screens/HomeScreen/Home';

// import 'react-native-gesture-handler';

import Plash from './src/screens/PlashScreen/Plash';
import SignIn from './src/screens/SignInScreen/SignIn';
import Register from './src/screens/RegisterSceen/Register';
import Product from './src/screens/ProductScreen/Product';
import HomeScreen from './src/screens/HomeScreen/Home';
import Detail from './src/screens/DetailScreen/Detail';

import BottomNavigation from './src/screens/TabNavigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import {
//   createBottomTabNavigator
// } from '@react-navigation/bottom-tabs';

StatusBar.setHidden(true);
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Plash" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Plash" component={Plash} options={{ title: 'Plash'}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn'}} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register'}} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detail'}} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ title: 'Home'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

