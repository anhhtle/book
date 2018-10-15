import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CurrentReadingModalCard extends React.Component {
    render () {
        const book = this.props.variant.book;

        return (
            <View style={styles.container}>
                <View style={styles.bookDetail}>
                    <Text>{book.title}</Text>
                    <Text style={styles.author}>{book.authors[0]}</Text>
                </View>

                <TouchableOpacity style={styles.addButton} onPress={() => this.props.addBook(this.props.index, 'Reading')}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} color={'#8c1515'} size={24}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    addButton: {
        width: 35
    }
});