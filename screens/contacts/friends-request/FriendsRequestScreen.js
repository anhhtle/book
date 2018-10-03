import React from 'react';
import { ScrollView, View, StyleSheet, } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';

export default class FriendsRequestScreen extends React.Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <ContactsHeader />
                <ContactsSubheader navigation={this.props.navigation} />

                <View>Request</View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})