import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default AvatarLockedCard = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.cardContent}>
                <View style={styles.imageContainer}>
                    <Image source={require('thebooksjourney/assets/book.jpg')} style={styles.image}/>
                </View>
                <View style={styles.avatarTextContainer}>
                    <Text style={styles.avatarName}>???</Text>
                    <Text style={styles.lockLabel}>TO UNLOCK</Text>
                    <Text style={styles.lockText}>{ props.avatar.lock }</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ededed',
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
        height: null,
    },
    avatarTextContainer: {
        flex: 4
    },
    avatarName: {
        fontWeight: 'bold',
        marginBottom: 5
    },
    lockLabel: {
        color: '#8c1515',
        marginBottom: 3
    }
});