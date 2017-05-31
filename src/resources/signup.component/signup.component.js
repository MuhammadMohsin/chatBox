import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { Link } from 'react-router-native';

class Signup extends React.Component {

    _signupHandler() {
        //navigator.push(routes[1]);
    }

    render() {
        const { 
            container,
            logo,
            img,
            title,
            sub_title,
            form,
            createAccText,
            input,
            button_container,
            button
            } = styles;
        return (
            <KeyboardAvoidingView behavior="padding" style={container}>
                <View style={logo}>
                    <Image
                        style={img}
                        source={require("./../../assets/images/logo13.png")} />

                    <Text style={title}>Chat Box</Text>
                    <Text style={sub_title}>Where you can connect!</Text>
                </View>
                <View style={form}>
                    <Text style={createAccText}>Create Account</Text>
                    <TextInput
                        placeholder="Enter email"
                        placeholderTextColor="#ffffff"
                        style={input}
                    />

                    <TextInput
                        placeholder="Enter password"
                        placeholderTextColor="#ffffff"
                        style={input}
                        secureTextEntry
                    />

                    <TextInput
                        placeholder="Confirm password"
                        placeholderTextColor="#ffffff"
                        style={input}
                        secureTextEntry
                    />

                    <TouchableOpacity style={button_container} onPress={this._signupHandler}>
                        <Link to="/dashboard">
                            <Text style={button}> SIGN UP </Text>
                        </Link>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 152, 219,1.0)'
    },
    logo: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    img: {
        height: 110,
        width: 110
    },
    title: {
        color: '#ffffff',
        fontWeight: '500',
        opacity: 0.8,
        fontSize: 25,
        fontFamily: 'sans-serif'
    },
    sub_title: {
        color: '#ffffff',
        fontWeight: '500',
        opacity: 0.8
    },
    form: {
        padding: 20
    },
    createAccText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#ffffff',
        opacity: 0.8,
        paddingBottom: 25,
        fontFamily: 'sans-serif-thin'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        color: '#ffffff'
    },
    button_container: {
        backgroundColor: 'rgba(41, 128, 185,1.0)',
        padding: 15
    },
    button: {
        textAlign: 'center',
        color: '#ffffff'
    }
});

export default Signup;