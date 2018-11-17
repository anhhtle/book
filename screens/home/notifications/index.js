import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default NotificationsSection = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.notificationSubsection} onPress={() => props.navigation.navigate('CommunityRequests')}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'} style={styles.notificationIcon} />
                <Text style={{flex: 1}}>You have <Text style={{color: '#8c1515', fontWeight: 'bold'}}>2</Text> share book requests</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.notificationSubsection} onPress={() => props.navigation.navigate('MyRequests')}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} style={styles.notificationIcon} />
                <Text style={{flex: 1}}>You requested <Text style={{color: '#8c1515', fontWeight: 'bold'}}>1</Text> book</Text>
            </TouchableOpacity>
        </View>
    );
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