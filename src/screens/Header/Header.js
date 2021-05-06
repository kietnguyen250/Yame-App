import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './StyleHeader';

const Header = () => {
    return(
        <View style={styles.header}>
                <Image
                // animation="bounceIn"
                // duration='1500'
                source={require('../../Images/yameLogo.jpg')}
                style={styles.logo}
                resizeMode='stretch'
                />
                <Text style={styles.textHeader}>Yame</Text>
                
        </View>
    );
}

export default Header;