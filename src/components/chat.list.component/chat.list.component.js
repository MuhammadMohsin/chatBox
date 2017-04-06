import React, {Component} from 'react';
import {Container, Content, List, ListItem, Thumbnail, Text, Body,Header} from 'native-base';
import {ListView, StyleSheet, View} from 'react-native';

import firebase, {firebaseDb} from '../../config/firebase';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            isLoading: false,
            messageList: []
        };

        let firebaseRef = firebase.database().ref();
        firebaseRef.child('users').once('value').then((data)=> {
            console.log(data.val());
            this.setState({messageList: data.val()[0].MessagesList});
            this.setState({isLoading: true});
        });
    }

    render() {
        return (
            <Container>
                <Header style={StyleSheet.flatten(styles.header)}>
                    <Text style={StyleSheet.flatten(styles.contactsTitle)}>Messages</Text>
                </Header>
                <Content>
                    {this.state.isLoading ?
                        <List
                            dataArray={this.state.messageList}
                            renderRow= {(data) =>
                                    <ListItem>
                                        <Thumbnail square size={80} source={require('./../../assets/images/logo13.png')}/>
                                        <Body style={StyleSheet.flatten(styles.msgRow)}>
                                            <Text style={StyleSheet.flatten(styles.nameTitle)}>{data.receiverName}</Text>
                                            <Text note style={StyleSheet.flatten(styles.msgText)}>{data.lastMessage}</Text>
                                        </Body>
                                    </ListItem>
                                }>
                        </List>
                        :
                        <Text>Loading..</Text>}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:0
    },
    header: {
        backgroundColor: 'rgba(41, 128, 185,0.85)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactsTitle: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        opacity: 0.9
    },
    nameTitle: {
        marginLeft: 12,
        fontSize: 16,
        color: 'rgba(41, 128, 185, 1.0)',
    },
    msgRow: {
        flex: 1,
    },
    msgText: {
    }
});
export default MessageList;