import React, { Component } from 'react';
import { Text, View, Image, Platform, Dimensions, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class bookCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const book = this.props.book

        return (
            <View style={styles.container}>
                {this.renderImage()}
                <View style={{flexDirection: 'row'}}>
                    {this.renderRatingStars()}
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

    renderRatingStars() {
        let ratingNum = this.props.book.ratings;

        let fullStar = Math.floor(ratingNum / 1);
        let halfStar = Math.round(ratingNum % fullStar);
        let emptyStar = 5 - fullStar - halfStar;

        let starTemplate = [];
        for (let i = 1; i <= fullStar ; i++) {
            starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'gold'} size={16} key={`full${i}`} />)
        }
        for (let i = 1; i <= halfStar ; i++) {
            starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star-half' : 'md-star-half'} color={'gold'} size={16} key={`half${i}`}/>)
        }
        for (let i = 1; i <= emptyStar ; i++) {
            starTemplate.push(<Ionicons name={Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'} color={'gold'} size={16} key={`empty${i}`}/>)
        }

        return starTemplate;
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