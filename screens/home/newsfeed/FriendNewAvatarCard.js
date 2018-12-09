import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { renderLongDate } from 'book/screens/utility/helperFunctions';

export default FriendNewAvatarCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardHeading}>
                <Image source={{uri: props.friend.avatar.image}} style={styles.profileImage}/>
                <View style={styles.nameDateContainer}>
                    <Text><Text style={styles.profileName}>{props.friend.first_name + ' ' + props.friend.last_name}</Text> unlocked a new <Text style={{fontWeight: 'bold'}}>avatar</Text></Text>
                    <Text style={styles.date}>{renderLongDate(props.date)}</Text>
                </View>
            </View>

            <View style={styles.cardContent}>
                <Image source={{uri: props.avatar.image }} style={styles.avatarImage}/>
                <View style={styles.avatarTextContainer}>
                    <Text style={styles.avatarName}>{ props.avatar.name }</Text>
                    <Text style={styles.avatarQuote}>"{ props.avatar.quote }"</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },

    // card heading
    cardHeading: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    nameDateContainer: {
        flex: 4,
        justifyContent: 'space-around'
    },
    profileName: {
        fontWeight: 'bold'
    },
    date: {
        color: 'grey',
        fontSize: 12,
    },

    // card content
    cardContent: {
        flexDirection: 'row'
    },
    avatarImage: {
        flex: 1,
        height: 70,
        resizeMode: 'contain',
        backgroundColor: 'lightgrey',
        marginRight: 10
    },
    avatarTextContainer: {
        flex: 4
    },
    avatarName: {
        fontWeight: 'bold'
    },
    avatarQuote: {
        fontStyle: 'italic'
    },
});