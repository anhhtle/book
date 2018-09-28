import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class NotificationsSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi</Text>

                <View style={styles.newsCard}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    newsCard: {
        
    }

});