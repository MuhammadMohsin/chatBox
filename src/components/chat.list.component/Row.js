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
    text: {
        marginLeft: 12,
        fontSize: 16
    },
    photo: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
});

const Row = (props) => (
    <View style={styles.container}>
        <Image source={{ uri: props.picture.large}} style={styles.photo} />
        <Text style={styles.text}>
            {`${props.name.first.charAt(0).toLocaleUpperCase() + props.name.first.slice(1).toLocaleLowerCase()} ${props.name.last.charAt(0).toLocaleUpperCase() + props.name.last.slice(1).toLocaleLowerCase()} `}
        </Text>
    </View>
);

export default Row;