import React, { Component } from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

import ContactsHeader from '../contacts/ContactsHeader';
import ContactCards from './ContactCards';

export default class ContactsScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ContactsHeader />

                <ContactCards />
                <ContactCards />
                <ContactCards />
                <ContactCards />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});