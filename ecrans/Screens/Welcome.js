import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import programing from '../../assets/images/background.jpg';
import { button1 } from '../common/button';

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={programing} style={styles.patternerBg} />
            <View style={styles.container1}>
                {/* <Image source={} style={styles.logo} /> */}
                <Text style={styles.head}>Welcome to hospit plus</Text>
                <Text style={button1} onPress={() => navigation.navigate('login')}>
                    Login
                </Text>
                <Text style={button1} onPress={() => navigation.navigate('signup')}>
                    SignUp
                </Text>
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
    },
    logo: {
        height: '20%',
        resizeMode: 'contain',
        marginBottom: 50
    }
});
