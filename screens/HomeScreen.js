import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MainHeader from './MainHeader';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader />
                <Text>Hello world!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});