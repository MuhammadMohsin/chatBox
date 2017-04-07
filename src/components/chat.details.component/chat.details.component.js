import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Header, Text} from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';

class MessageDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    render() {
        return (
            <Container>
                <Header style={StyleSheet.flatten(styles.header)}>
                    <Text style={StyleSheet.flatten(styles.contactsTitle)}>Messages</Text>
                </Header>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1
                        }}
                    />
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(41, 128, 185,0.85)',
        height: 45,
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

export default MessageDetails;