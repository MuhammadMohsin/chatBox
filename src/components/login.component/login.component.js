import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Link } from 'react-router-native';

class Login extends React.Component {

    constructor(props){
        super(props);
    }
    _loginHandler(){
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={styles.img}
                        source={require("./../../assets/images/logo13.png")} />

                    <Text style={styles.title}>Chat Box</Text>
                    <Text style={styles.sub_title}>Where you can connect!</Text>
                </View>
                <View style={styles.form}>

                    <Text style={styles.loginText}>Getting Started</Text>

                    <TextInput
                        placeholder="Enter email"
                        placeholderTextColor="#ffffff"
                        style={styles.input}
                        />

                    <TextInput
                        placeholder="Enter password"
                        placeholderTextColor="#ffffff"
                        style={styles.input}
                        secureTextEntry
                        />

                    <TouchableOpacity style={styles.button_container} onPress={this._loginHandler.bind(this)}>
                        <Text style={styles.button}> LOGIN </Text>
                    </TouchableOpacity>

                    <Link to="/signup">
                        <Text style={styles.newAccLink}>Create new account</Text>
                    </Link>

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
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    img:{
        height: 110,
        width:110
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
        padding:20
    },
    loginText: {
        textAlign: 'center',
        fontSize: 30,
        color: '#ffffff',
        opacity: 0.8,
        paddingBottom: 25,
        fontFamily: 'sans-serif-thin'
    },
    newAccLink: {
        textAlign: 'center',
        fontSize: 14,
        color: '#ffffff',
        opacity: 0.8,
        paddingTop: 25,
        fontFamily: 'sans-serif-medium'
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

export default Login;