import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, Image, TouchableOpacity, KeyboardAvoidingView, ListView } from 'react-native';
import { Link } from 'react-router-native';

class FriendList extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Assad', 'Jawad', 'Bilal', 'Tahir', 'Haseeb', 'Kamran', 'Zain'])
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Friends</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                <Text>{rowData}</Text>}
                    />
            </View>
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
        textAlign: 'center',
        fontSize: 24,
        color: '#ffffff',
        opacity: 0.8,
        paddingTop: 25,
        fontFamily: 'sans-serif-medium'
    },
    form: {
        padding: 20
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

export default FriendList;