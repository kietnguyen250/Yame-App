import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Product from '../ProductScreen/Product';
import Home from '../HomeScreen/Home';
import Profile from '../ProfileScreen/Profile';
// import TabBar from '../TabNavigation/TabBar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

// import { color } from 'react-native-reanimated';


const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (

        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{ backgroundColor: '#333' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-circle" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    title: 'Products',
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color="black" }) => (
                    <MaterialCommunityIcons name="heart-circle" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Account',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                ),
                }}
            />
            
        </Tab.Navigator>

  );
};

export default BottomNavigation;