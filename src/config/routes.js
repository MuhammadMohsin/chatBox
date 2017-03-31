import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link, Router, Route, NativeRouter } from 'react-router-native';

/* Import Components Here!!!*/
import Login from './../components/login.component/login.component.js';
import Signup from './../components/signup.component/signup.component.js';

const Routes = () => (
    <NativeRouter>
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Login</Text>
                </Link>
                <Link
                    to="/signup"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Sign up</Text>
                </Link>
            </View>

            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
        </View>
    </NativeRouter>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
});

export default Routes;