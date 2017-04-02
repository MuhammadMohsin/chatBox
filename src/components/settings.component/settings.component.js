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
        backgroundColor: 'rgba(0, 0, 0,0.1)'
    },
    contactsTitle: {
        color: 'rgba(0, 0, 0,0.7)',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default SettingsComponent;