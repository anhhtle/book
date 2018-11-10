import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default BookmarkCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                <Image source={{uri: props.bookmark.image }} style={styles.bookmarkImage}/>
                <View style={styles.bookmarkTextContainer}>
                    <Text style={styles.bookmarkName}>{ props.bookmark.name }</Text>
                    <Text style={styles.bookmarkQuote}>"{ props.bookmark.quote }"</Text>
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

    // card content
    cardContent: {
        flexDirection: 'row'
    },
    bookmarkImage: {
        flex: 1,
        height: 70,
        resizeMode: 'contain',
        backgroundColor: 'lightgrey',
        marginRight: 10
    },
    bookmarkTextContainer: {
        flex: 4
    },
    bookmarkName: {
        fontWeight: 'bold'
    },
    bookmarkQuote: {
        fontStyle: 'italic'
    },
});