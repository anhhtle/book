import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ContactsSubheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.navigation.state.routeName
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.subheaderLink} onPress={() => this.props.navigation.navigate('FriendsList')}>
                    <Text style={this.state.activeTab === 'FriendsList' ? styles.subheaderLinkActive : styles.subheaderLinkText}>FRIENDS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subheaderLink} onPress={() => this.props.navigation.navigate('FriendsRequest')}>
                    <Text style={this.state.activeTab === 'FriendsRequest' ? styles.subheaderLinkActive : styles.subheaderLinkText}>REQUESTS</Text>
                </TouchableOpacity>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginBottom: 2,
    },
    subheaderLink: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subheaderLinkText: {
        color: 'lightgrey',
        fontSize: 16,
    },
    subheaderLinkActive: {
        color: '#8c1515',
        fontSize: 16
    }
});