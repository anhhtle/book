import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainHeader from '../MainHeader';

export default class BookcaseScreen extends React.Component {
    render () {
        return (
            <View style={styles.container}>

                <MainHeader />

                <Text>Bookcase</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});