import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default CurrentReadingCard = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.bookDetail}>
                <Text style={styles.title}>{props.variant.book.title}</Text>
                <Text style={styles.author}>{props.variant.book.authors[0]}</Text>
            </View>

            <Text style={{marginRight: 10, color: '#4885ed', fontSize: 18}}>{props.variant.progress + '%'}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    bookDetail: {
        flex: 1
    },
    author: {
        fontWeight: 'bold'
    },
    progressDropdown: {
        marginRight: 5,
        padding: 5
    },
    progress: {
        fontSize: 20,
        color: '#4885ed',
    },
    removeButton: {
        width: 35,
        alignItems: 'center',
    },

    // modal
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 10,
        width: 200
    }
});