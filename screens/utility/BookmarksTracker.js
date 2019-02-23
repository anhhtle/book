import React from 'react';
import { Text, View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default BookmarksTracker = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.bookmarksContainer}>
                <Text style={{marginRight: 3}}>{props.silver}</Text>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} color={'silver'} size={24}/>
            </View>
            <View style={styles.bookmarksContainer}>
                <Text style={{marginRight: 3}}>{props.gold}</Text>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} color={'gold'} size={24}/>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('UserGuide', {destination: props.destination})}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-information-circle-outline' : 'md-information-circle-outline'} color={'#8c1515'} size={24}/>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 50,
        right: 30,
        width: 100,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 5,
        // box shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    bookmarksContainer: {
        flexDirection: 'row'
    }
});