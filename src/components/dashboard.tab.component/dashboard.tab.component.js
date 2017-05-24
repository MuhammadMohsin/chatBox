import React from 'react';
import Tabs from 'react-native-tabs';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import FriendList from './../friends.list.component/friends.list.component.js';
import MessageList from './../chat.list.component/chat.list.component';
import MessageDetails from './../chat.details.component/chat.details.component.js';
import SettingsComponent from './../settings.component/settings.component.js';

class TabsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'Contacts'};
    }

    render() {
        const {
            container,
            tabs,
            selectedTab
        } = styles;
        return (
            <View style={container}>
                <Tabs selected={this.state.page} style={tabs}
                      selectedStyle={{color:'rgba(52, 152, 219,1.0)'}} onSelect={el=>this.setState({page:el.props.name})}>
                    <Text name="Contacts" selectedIconStyle={selectedTab}>Contacts</Text>
                    <Text name="Chat" selectedIconStyle={selectedTab}>Chat</Text>
                    <Text name="Settings" selectedIconStyle={selectedTab}>Settings</Text>
                </Tabs>
                <View style={styles.container}>
                    {(this.state.page == 'Contacts')?
                        <FriendList /> :
                            (this.state.page == 'Chat')? <MessageList {...this.props}/> :
                                                         <SettingsComponent {...this.props} />}
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
    },
    selectedTab: {
        borderTopWidth:2,
        borderTopColor:'rgba(41, 128, 185,1.0)'
    }
});

export default TabsComponent;