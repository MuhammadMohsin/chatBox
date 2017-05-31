import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, Router, Route, NativeRouter } from 'react-router-native';

/* Import Components Here!!!*/
import Login from './../resources/login.component/login.component.js';
import Signup from './../resources/signup.component/signup.component.js';
import TabsComponent from './../resources/dashboard.tab.component/dashboard.tab.component.js';
import FriendList from './../resources/friends.list.component/friends.list.component.js';
import MessageList from './../resources/chat.list.component/chat.list.component';
import MessageDetails from './../resources/chat.details.component/chat.details.component.js';
import SettingsComponent from './../resources/settings.component/settings.component.js';

const Routes = () => (
    <NativeRouter>
        <View style={styles.container}>
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={TabsComponent}/>
            <Route path="/friends" component={FriendList}/>
            <Route path="/messageList" component={MessageList}/>
            <Route path="/message" component={MessageDetails}/>
            <Route path="/settings" component={SettingsComponent}/>
        </View>
    </NativeRouter>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Routes;