import React from 'react';
import Tabs from 'react-native-tabs';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import FriendList from './../friends.list.component/friends.list.component.js';
import MessageDetails from './../chat.details.component/chat.details.component.js';
import SettingsComponent from './../settings.component/settings.component.js';

class TabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'Contacts'};
    }

    render() {
        return (
            <View style={styles.container}>
                <Tabs selected={this.state.page} style={styles.tabs}
                      selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                    <Text name="Contacts" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Contacts</Text>
                    <Text name="Chat" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Chat</Text>
                    <Text name="Settings" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Settings</Text>
                </Tabs>
                <View style={styles.container}>
                    {(this.state.page == 'Contacts')?
                        <FriendList /> :
                            (this.state.page == 'Chat')? <MessageDetails /> :
                                                         <SettingsComponent />}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex:10,
        flex: 1
    },
    tabs: {
        zIndex:20,
        backgroundColor:'white'
    }
});

export default TabsComponent;