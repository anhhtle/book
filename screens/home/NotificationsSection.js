import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class NotificationsSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.notificationSubsection}>
                    <Ionicons name={'ios-paper-plane'} style={styles.notificationIcon} />
                    <Text style={{flex: 1}}>You have <Text style={{color: '#8c1515', fontWeight: 'bold'}}>2</Text> share book requests</Text>
                </View>

                <View style={styles.notificationSubsection}>
                    <Ionicons name={'ios-bookmark'} style={styles.notificationIcon} />
                    <Text style={{flex: 1}}>You requested <Text style={{color: '#8c1515', fontWeight: 'bold'}}>1</Text> book</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 5,
    },
    notificationSubsection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    notificationIcon: {
        fontSize: 20,
        color: '#8c1515',
        marginRight: 10
    }

});