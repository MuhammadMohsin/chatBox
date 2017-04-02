import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, Router, Route, NativeRouter } from 'react-router-native';

/* Import Components Here!!!*/
import Login from './../components/login.component/login.component.js';
import Signup from './../components/signup.component/signup.component.js';
import FriendList from './../components/friends.list.component/friends.list.component.js';

const Routes = () => (
    <NativeRouter>
        <View style={styles.container}>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/friends" component={FriendList}/>
        </View>
    </NativeRouter>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Routes;