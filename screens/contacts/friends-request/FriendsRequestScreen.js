import React from 'react';
import { ScrollView, Text, StyleSheet, } from 'react-native';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';

export default class FriendsRequestScreen extends React.Component {
    render () {
        return (
            <ScrollView style={styles.container}>
                <ContactsHeader />
                <ContactsSubheader navigation={this.props.navigation} />

                <Text>Request</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})