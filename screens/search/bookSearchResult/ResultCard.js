import React from 'React';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props.item
        };
    }

    render () {

        return (
            <View style={styles.container}>
                { this.renderImage() }

                <View style={styles.cardDetail}>
                    <Text style={styles.title}>{this.state.book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{this.state.book.volumeInfo.authors ? this.state.book.volumeInfo.authors[0] : ''}</Text>

                    {/* ratings */}
                    <View style={{flexDirection: 'row'}}>
                        { this.renderRatingStars() }
                    </View>

                    {/* action button */}
                    <TouchableOpacity style={styles.actionIconContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} style={styles.actionIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderImage() {
        if (this.state.book.volumeInfo.imageLinks) {
            return <Image source={{ uri: this.state.book.volumeInfo.imageLinks.smallThumbnail }} style={styles.cardImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.cardImage} />
    }

    renderRatingStars() {
        let ratingNum = this.state.book.volumeInfo.averageRating;

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

    componentWillReceiveProps(nextProps) {
        this.setState({book: nextProps.item});
    }

}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 140,
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
        marginBottom: 5
    },
    author: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    actionIconContainer: {
        width: 35,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    actionIcon: {
        fontSize: 30,
        color: '#8c1515'
    }
})