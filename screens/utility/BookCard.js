import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { renderRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class bookCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const book = this.props.book;

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.showModal}>
                {this.renderImage()}
                <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
                <View style={{flexDirection: 'row'}}>
                    {renderRatingStars(this.props.book.ratings)}
                </View>
            </TouchableOpacity>
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
        height: 185,
        alignItems: 'center',
        margin: 5
    },
    bookImage: {
        height: 130,
        width: Dimensions.get('window').width / 3.8,
        resizeMode: 'contain',
    },
    title: {
        marginVertical: 5
    },
});