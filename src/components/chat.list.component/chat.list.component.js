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

    renderRow(filter) {
        var onPress = () => {
            console.log(this.props);
            if (this.props.history)
                this.props.history.push("/message");
        }
        return <ListItem onPress={onPress}>
            <Thumbnail square size={80} source={require('./../../assets/images/logo13.png')}/>
            <Body style={StyleSheet.flatten(styles.msgRow)}>
            <Text style={StyleSheet.flatten(styles.nameTitle)}>{filter.receiverName}</Text>
            <Text note style={StyleSheet.flatten(styles.msgText)}>{filter.lastMessage}</Text>
            </Body>
        </ListItem>;
    }

    render() {
            const {
                header,
                contactsTitle
            } = styles;
        return (
            <Container>
                <Header style={StyleSheet.flatten(header)}>
                    <Text style={StyleSheet.flatten(contactsTitle)}>Messages</Text>
                </Header>
                <Content>
                    {this.state.isLoading ?
                        <List
                            dataArray={this.state.messageList}
                            renderRow= {this.renderRow.bind(this)}>
                        </List>
                        :
                        <Text>Loading..</Text>}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});
export default MessageList;