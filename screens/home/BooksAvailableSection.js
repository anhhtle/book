import React, { Component } from 'react';
import { Text, View, Image, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Available books</Text>
                <View style={styles.horizontalBooksContainer}>

                    <View style={styles.bookCard}>
                        <Image source={{uri: 'https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg'}} style={styles.bookImage}/>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                        </View>
                        <Text style={styles.bookTitle} numberOfLines={2}>A Game of Thrones</Text>
                    </View>

                    <View style={styles.bookCard}>
                        <Image source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg'}} style={styles.bookImage}/>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                        </View>
                        <Text style={styles.bookTitle} numberOfLines={2}>Harry Potter and the Sorcerer's Stone</Text>
                    </View>

                    <View style={styles.bookCard}>
                        <Image source={{uri: 'https://jbrary.com/wp-content/uploads/2018/03/the-dress-and-the-girl.jpg'}} style={styles.bookImage}/>
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} />
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'} color={'gold'} size={16} />
                        </View>
                        <Text style={styles.bookTitle} numberOfLines={2}>The Dress and the Girl</Text>
                    </View>

                </View>
                <Text style={styles.browseLink}>Browse all...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    // available books section
    container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        color: '#8c1515',
        fontWeight: 'bold'
    },
    horizontalBooksContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    bookCard: {
        flex: 1,
        height: 180,
        alignItems: 'center',
        margin: 5,
    },
    bookImage: {
        height: 130,
        width: 500,
        resizeMode: 'contain',
    },
    bookTitle: {
        marginTop: 5
    },
    browseLink: {
        color: '#4885ed',
        marginTop: 10,
        textAlign: 'right'
    }

});