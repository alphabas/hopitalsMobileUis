import { Image, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import React from 'react';
import programing from '../../assets/images/background.jpg';
import { button1 } from '../common/button';
import { formgroup, formgroup1, head1, head2, input, input1, label, link, link2 } from '../common/formcsss';
// import programing from '../../assets/images/patterner.jpg';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={programing} style={styles.patternerBg} />
            <View style={styles.container1}>
                <View style={styles.s1}></View>
                <ScrollView style={styles.s2}>
                    <Text style={head1}>Create a New Account</Text>
                    <Text style={link2}>
                        Already Registered ?{' '}
                        <Text style={link} onPress={() => navigation.navigate('login')}>
                            {' '}
                            Login here{' '}
                        </Text>
                    </Text>
                    <View style={formgroup}>
                        <Text style={label}>Name</Text>
                        <TextInput style={input} placeholder="Enter your name" />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>Email</Text>
                        <TextInput style={input} placeholder="Enter your email" />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>DOB</Text>
                        <TextInput style={input} placeholder="Enter your date of birthday" />
                    </View>
                    <View style={formgroup}>
                        <Text style={label}>Password</Text>
                        <TextInput style={input} placeholder="Enter your password" />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>Confirm Password</Text>
                        <TextInput style={input} placeholder="Confirm your password" />
                    </View>

                    <View style={formgroup}>
                        <Text style={label}>Adresse</Text>
                        <TextInput style={input1} placeholder="Your adress" />
                    </View>

                    <Text style={button1}>Signup</Text>
                </ScrollView>
            </View>
        </View>
    );
};

export default SignUp;

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
        height: '5%'
    },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '95%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10
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
