import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import MainHeader from '../MainHeader';
import BooksAvailableSection from './BooksAvailableSection';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader />

                <BooksAvailableSection />

                {/* notifications */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});