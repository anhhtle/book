import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

// component
import BookCard from 'book/screens/utility/BookCard';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testBookData: [
                {
                    _id: '1',
                    title: 'A Game of Thrones',
                    image: 'https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg',
                    ratings: 4
                },
                {
                    _id: '2',
                    title: "Harry Potter and the Sorcerer's Stone",
                    image: 'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
                    ratings: 4.5
                },
                {
                    _id: '3',
                    title: 'The Dress and the Girl',
                    image: 'https://jbrary.com/wp-content/uploads/2018/03/the-dress-and-the-girl.jpg',
                    ratings: 4.3
                },
                {
                    _id: '4',
                    title: 'A Game of Thrones',
                    image: 'https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg',
                    ratings: 4
                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Available books</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalBooksContainer}>
                        {this.renderBooks()}
                    </View>
                </ScrollView>
                <Text style={styles.browseLink}>Browse all...</Text>
            </View>
        );
    }

    renderBooks() {
        let arr = [];
        this.state.testBookData.map(item => {
            arr.push(<BookCard book={item} key={item._id} />)
        })

        return arr;
    }
}

const styles = StyleSheet.create({
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