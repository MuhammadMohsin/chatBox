import React from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View } from 'react-native';
import { Link } from 'react-router-native';

class SettingsComponent extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.contactsTitle}>Settings</Text>
                </View>
            </View>
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

export default SettingsComponent;