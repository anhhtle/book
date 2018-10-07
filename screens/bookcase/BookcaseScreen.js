import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainHeader from '../MainHeader';
import CurrentReadingSection from './CurrentReadingSection';

export default class BookcaseScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>

                <MainHeader />

                <CurrentReadingSection />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});