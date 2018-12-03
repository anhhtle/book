import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default AvatarCard = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.showModal}>
            <View style={styles.cardContent}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: props.avatar.image }} style={styles.image}/>
                </View>
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
    },

    cardContent: {
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        marginRight: 10
    },
    image: { 
        flex: 1,
        resizeMode: 'cover',
        width: null, 
        height: 70,
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