import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import programing from '../../assets/images/background.jpg';
import { button1 } from '../common/button';
import { formgroup, head1, head2, input, label, link, link2 } from '../common/formcsss';
// import programing from '../../assets/images/patterner.jpg';

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={programing} style={styles.patternerBg} />
            <View style={styles.container1}>
                <View style={styles.s1}>
                    <Text style={styles.h1}>Used2, Inc</Text>
                    <Text style={styles.small1}>Buying and sell online </Text>
                </View>
                <View style={styles.s2}>
                    <Text style={head1}>Login</Text>
                    <Text style={head2}>Sign in to continue </Text>
                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} />
                    </View>
                    <View style={styles.fp}>
                        <Text style={link}>Forgot Password ?</Text>
                    </View>
                    <Text style={button1}>Login</Text>
                    <Text style={link2}>
                        Don't an account ? <Text style={link}> Create a new account ? </Text>{' '}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Login;

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

    container1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    s1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%'
    },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '65%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    small1: {
        color: '#fff',
        fontSize: 17
    },
    h1: {
        color: '#fff',
        fontSize: 30
    },
    fp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginVertical: 5
    }
});
