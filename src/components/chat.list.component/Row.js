import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9'
    },
    nameTitle: {
        marginLeft: 12,
        fontSize: 16,
        color: 'rgba(41, 128, 185, 1.0)',
        flex: 1,flexDirection:'row', flexWrap:'wrap'
    },
    msgText: {
        flex: 3,
        marginLeft: 12,
        fontSize: 13,flexDirection:'row', flexWrap:'nowrap'
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

const Row = (props) => (
    <View style={styles.container}>
        {/*<Image source={{ uri: props.picture.large}} style={styles.photo} />*/}
        <Text style={styles.nameTitle}>
            {`${props.receiverName.charAt(0).toLocaleUpperCase() + props.receiverName.slice(1).toLocaleLowerCase()}`}
        </Text>
        <Text style={styles.msgText}>
            {`${props.lastMessage}`}
        </Text>
    </View>
);

export default Row;