import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendCard extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <Image resizeMethod="resize" source={{url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.contactImage} />

                <View style={styles.rightSideContainer}>
                    <Text style={styles.contactName}>Anh Le</Text>
                    <TouchableOpacity>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} style={styles.moreIcon} />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row'
    },
    contactImage: {
        // flex: 1,
        width: 60,
        height: 60,
        // resizeMode: 'contain',
        marginRight: 10
    },
    rightSideContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contactName: {
        fontSize: 16,
    },
    moreIcon: {
        fontSize: 18,
        marginRight: 10
    }
});