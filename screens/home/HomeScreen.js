import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MainHeader from '../MainHeader';
import BooksAvailableSection from './BooksAvailableSection';
import NotificationsSection from './NotificationsSection';
import NewsfeedSection from './NewsfeedSection';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader />

                <BooksAvailableSection />
                <NotificationsSection />
                <NewsfeedSection />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});