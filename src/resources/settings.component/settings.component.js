import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

class SettingsComponent extends React.Component {

    render() {
        const {
            container,
            header,
            contactsTitle,
            button_container,
            button
        } = styles;
        return (
            <View style={container}>
                <View style={header}>
                    <Text style={contactsTitle}>Settings</Text>
                </View>

                <TouchableOpacity style={button_container}>
                    <Link to="/message">
                        <Text style={button}> Go To Message Details </Text>
                    </Link>
                </TouchableOpacity>
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

export default SettingsComponent;