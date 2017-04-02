import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';

class MessageDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.contactsTitle}>Messages</Text>
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

export default MessageDetails;