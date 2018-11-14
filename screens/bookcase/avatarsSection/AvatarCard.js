import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default AvatarCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.showModal}>
            <View style={styles.cardContent}>
                <Image source={{uri: props.avatar.image }} style={styles.avatarImage}/>
                <View style={styles.avatarTextContainer}>
                    <Text style={styles.avatarName}>{ props.avatar.name }</Text>
                    <Text style={styles.avatarQuote}>"{ props.avatar.quote }"</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
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