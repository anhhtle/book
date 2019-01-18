import React from 'React';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default AvatarCard = (props) => {

    return (
        <TouchableOpacity style={props.profileAvatar ? styles.profileContainer : styles.container} onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <Image source={{uri: props.avatar.image }} style={styles.image}/>
            </View>

            <View style={styles.avatarTextContainer}>
                <Text style={styles.avatarName}>{ props.avatar.name }</Text>
                <Text style={styles.avatarQuote}>"{ props.avatar.quote }"</Text>
                <Text style={styles.avatarQuoteAuthor}>{ props.avatar.quote_author }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        height: 120
    },
    profileContainer: {
        backgroundColor: '#fcfbcc',
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        height: 120
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
    avatarQuoteAuthor: {
        color: '#8c1515',
        fontWeight: 'bold'
    },
    saveButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED766',
        height: 35,
        width: 250,
        marginTop: 10,
        marginBottom: 10
    },
    link: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#009FB7',
        fontWeight: 'bold',
    }
});
