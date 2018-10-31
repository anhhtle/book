import React, { Component } from 'react';
import { Text, View, Image, Platform, Dimensions, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { renderRatingStars } from 'book/screens/utility/helperFunctions';

export default class bookCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const book = this.props.book;

        return (
            <View style={styles.container}>
                {this.renderImage()}
                <View style={{flexDirection: 'row'}}>
                    {renderRatingStars(this.props.book.ratings)}
                </View>
                <Text style={styles.bookTitle} numberOfLines={2}>{book.title}</Text>
            </View>
        );
    }

    renderImage() {
        if (this.props.book.image) {
            return <Image source={{ uri: this.props.book.image }} style={styles.bookImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 3.8,
        height: 180,
        alignItems: 'center',
        margin: 5
    },
    bookImage: {
        height: 130,
        width: 500,
        resizeMode: 'contain',
    },
    bookTitle: {
        marginTop: 5
    },
});