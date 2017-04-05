import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Dimensions,
    StyleSheet
} from 'react-native';
var windowSize = Dimensions.get('window');

class MessageDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            message: ''
        }

    }

    render() {
        return (
            <View style={styles.container}>
                {/*<View style={styles.header}>
                    <Text style={styles.contactsTitle}>Messages</Text>
                </View>*/}

                <View>
                    <View style={styles.topContainer}>
                        <TouchableHighlight
                            underlayColor={'#4e4273'}
                            style={{marginLeft: 15}}
                        >
                            <Text style={{color: '#fff'}}>&lt; Back</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.chatContainer}>
                        <Text style={{color: '#000'}}>Chat</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.textContainer}>
                            <TextInput
                                style={styles.input}
                                value={this.state.message}
                                onChangeText={(text) => this.setState({message: text})}
                            />
                        </View>
                        <View style={styles.sendContainer}>
                            <TouchableHighlight
                                underlayColor={'#4e4273'}
                            >
                                <Text style={styles.sendLabel}>SEND</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex:0,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#ffffff'
    },
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
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#6E5BAA',
        paddingTop: 20,
    },
    chatContainer: {
        flex: 11,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6E5BAA'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    sendContainer: {
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    sendLabel: {
        color: '#ffffff',
        fontSize: 15
    },
    input: {
        width: 200,
        color: '#555555',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        height: 32,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
});

export default MessageDetails;