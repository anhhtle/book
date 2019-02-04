import React from 'React';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { renderRatingStars, renderUserRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render () {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.showModal}>
                { this.renderImage() }

                <View style={styles.cardDetail}>
                    <Text style={styles.title}>{this.props.variant.book.title}</Text>
                    <Text style={styles.author}>{this.props.variant.book.authors ? this.props.variant.book.authors[0] : ''}</Text>

                    {/* ratings */}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text>Average ratings: </Text>
                        { this.renderRating() }
                    </View>

                    {/* user ratings */}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text>{this.props.variant.user.first_name + `'s`} rating: </Text>
                        { this.renderUserRating() }
                    </View>

                    {/* status*/}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text>Status: </Text>
                        <Text style={{color: '#4885ed'}}>{this.props.variant.status}</Text>
                    </View>

                    {/* share? */}
                    <View style={styles.switchContainer}>
                        <Text style={{marginRight: 10}}>Available for community?</Text>
                        <Text style={{color: '#4885ed'}}>{this.props.variant.available_for_share ? 'Yes' : 'No'}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    renderImage() {
        if (this.props.variant.book.image) {
            return <Image source={{ uri: this.props.variant.book.image }} style={styles.cardImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.cardImage} />
    }
    renderRating() {
        if (this.props.variant) {
            if (this.props.variant.book.ratings) {
                return renderRatingStars(this.props.variant.book.ratings);
            }
        }
        return renderRatingStars(0)
    }
    renderUserRating() {
        if (this.props.variant) {
            return renderUserRatingStars(this.props.variant.user_rating)
        }
        return renderUserRatingStars(0)
    }
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5
    },
    cardImage: {
        flex: 1,
        width: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    cardDetail: {
        flex: 4,
        paddingVertical: 7,
        justifyContent: 'space-between'
    },
    title: {
        marginBottom: 5,
        color: '#8c1515',
        fontWeight: 'bold'
    },
    author: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    status: {
        color: '#8c1515'
    },
    switchContainer: {
        flexDirection: 'row'
    }
})