import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const TabBar = ({state, navigation}) => {
    const {routes} = state;
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map(route => (
                    <Tab tab={route} 
                    // icon={}
                    // onPress={} 
                    // color={} 
                    key={route.key} />))
                }
            </View>
        </View>
    )
}
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        height: 50,
        backgroundColor: 'red',
    },
    container: {

    }
});
export default TabBar;