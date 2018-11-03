import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendCard extends React.Component {

    render () {
        return (
            <View style={styles.container}>
                <Image resizeMethod="resize" source={{url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Atticus_Finch.png/250px-Atticus_Finch.png'}} style={styles.contactImage} />

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