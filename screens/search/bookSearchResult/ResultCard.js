import React from 'React';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { renderRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

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
                    { this.renderCategories() }

                    {/* ratings */}
                    <View style={{flexDirection: 'row'}}>
                        { renderRatingStars(this.state.book.volumeInfo.averageRating) }
                    </View>

                    {/* action button */}
                    <TouchableOpacity style={styles.actionIconContainer} onPress={this.props.showModal}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'} style={styles.actionIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({book: nextProps.item});
    }
    renderImage() {
        if (this.state.book.volumeInfo.imageLinks) {
            return <Image source={{ uri: this.state.book.volumeInfo.imageLinks.smallThumbnail }} style={styles.cardImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.cardImage} />
    }
    renderCategories() {
        if (this.state.book.volumeInfo.categories) {
            let str = '';
            this.state.book.volumeInfo.categories.map((cat, index) => {
                if (index < 2) {
                    if (index > 0) {
                        str += ', '
                    } 
                    str += cat;
                }
            });

            return (<Text style={styles.categories}>{str}</Text>);
        }
    }


}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 160,
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
    categories: {
        marginBottom: 5,
        color: 'blue'
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