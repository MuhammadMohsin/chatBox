import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';
import { Link } from 'react-router-native';
import {Container, Content, Header} from 'native-base';
import firebase, { firebaseDb } from '../../config/firebase';

import Row from './Row'
import demoData from './data'

class FriendList extends React.Component {
    constructor(props) {
        super(props);

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });

        this.state = {
            dataSource: [],
            isLoading: false
        };

        let firebaseRef = firebase.database().ref();
        firebaseRef.child('users').once('value').then((data)=> {
            console.log(data.val());
            const { dataBlob, sectionIds, rowIds }  = this.formatData(data.val()[0].Contacts);
            this.setState({dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)});
            this.setState({isLoading: true});
        });
    }

    formatData(data) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        const dataBlob = {};
        const sectionIds = [];
        const rowIds = [];

        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            const currentChar = alphabet[sectionId];

            const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

            if (users.length > 0) {
                sectionIds.push(sectionId);
                dataBlob[sectionId] = {character: currentChar};

                rowIds.push([]);

                for (let i = 0; i < users.length; i++) {
                    const rowId = `${sectionId}:${i}`;
        
                    rowIds[rowIds.length - 1].push(rowId);

                    dataBlob[rowId] = users[i];
                }
            }
        }

        return {dataBlob, sectionIds, rowIds};
    }

    render() {
        const{
            header,
            contactsTitle,
            container
        } = styles;

        return (
            <Container>
                <Header style={StyleSheet.flatten(header)}>
                    <Text style={StyleSheet.flatten(contactsTitle)}>Contacts</Text>
                </Header>
                <Content>

                    {this.state.isLoading ?
                        <ListView
                            style={container}
                            dataSource={this.state.dataSource}
                            renderRow={(data) => <Row {...data} />}
                            /> :
                        <Text>Loading..</Text>}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 0
    },
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

export default FriendList;