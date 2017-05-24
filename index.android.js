import React, { Component } from 'react';
import Routes from './src/config/routes.js';
import { AppRegistry } from 'react-native';

class ChatBox extends React.Component {
    render() {
        return (
            <Routes/>
        );
    }
}

AppRegistry.registerComponent('ChatBox', () => Routes);