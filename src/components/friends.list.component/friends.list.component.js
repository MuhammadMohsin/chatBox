import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View
} from 'react-native';
import { Link } from 'react-router-native';

import Row from './Row'
import demoData from './data'

class FriendList extends React.Component {
    constructor(props) {
        super(props)

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });

        const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
        }
    }

    formatData(data) {
        // We're sorting by alphabetically so we need the alphabet
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        // Need somewhere to store our data
        const dataBlob = {};
        const sectionIds = [];
        const rowIds = [];

        // Each section is going to represent a letter in the alphabet so we loop over the alphabet
        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            // Get the character we're currently looking for
            const currentChar = alphabet[sectionId];

            // Get users whose first name starts with the current letter
            const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

            // If there are any users who have a first name starting with the current letter then we'll
            // add a new section otherwise we just skip over it
            if (users.length > 0) {
                // Add a section id to our array so the listview knows that we've got a new section
                sectionIds.push(sectionId);

                // Store any data we would want to display in the section header. In our case we want to show
                // the current character
                dataBlob[sectionId] = { character: currentChar };

                // Setup a new array that we can store the row ids for this section
                rowIds.push([]);

                // Loop over the valid users for this section
                for (let i = 0; i < users.length; i++) {
                    // Create a unique row id for the data blob that the listview can use for reference
                    const rowId = `${sectionId}:${i}`;

                    // Push the row id to the row ids array. This is what listview will reference to pull
                    // data from our data blob
                    rowIds[rowIds.length - 1].push(rowId);

                    // Store the data we care about for this row
                    dataBlob[rowId] = users[i];
                }
            }
        }

        return { dataBlob, sectionIds, rowIds };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.contactsTitle}>Contacts</Text>
                </View>

                <ListView
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Row {...data} />}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default FriendList;