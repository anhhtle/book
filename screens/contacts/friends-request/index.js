import React from 'react';
import { ScrollView, Text, View, StyleSheet, } from 'react-native';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendRequestCard from './FriendRequestCard';

export default class FriendsRequestScreen extends React.Component {
    render () {
        return (
            <ScrollView style={styles.container} removeClippedSubviews={true}>
                <ContactsHeader navigation={this.props.navigation} />
                <ContactsSubheader navigation={this.props.navigation} />

                <View style={styles.friendsRequestCardContainer}>
                    <FriendRequestCard />
                    <FriendRequestCard />
                    <FriendRequestCard />
                    <FriendRequestCard />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    friendsRequestCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})