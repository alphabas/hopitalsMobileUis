import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import programing from '../../assets/images/background.jpg';
import { button1 } from '../common/button';
// import programing from '../../assets/images/patterner.jpg';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Image source={programing} style={styles.patternerBg} />
            {/* <Text style={styles.head}>HEL..</Text> */}
            <View style={styles.container1}>
                <Text style={styles.head}>Welcome to hospit plus</Text>
                <Text style={button1}>Login</Text>
                <Text style={button1}>SignUp</Text>
            </View>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    patternerBg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0
    },
    container: {
        width: '100%',
        height: '100%'
    },
    head: {
        color: 'white',
        fontSize: 30
    },
    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
});
