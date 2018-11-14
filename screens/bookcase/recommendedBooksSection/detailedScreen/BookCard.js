import React from 'React';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { renderRatingStars } from 'book/screens/utility/helperFunctions';

export default class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: this.props.variant,
            switchValue: true 
        };
    }

    render () {

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.showModal}>
                { this.renderImage() }

                <View style={styles.cardDetail}>
                    <Text style={styles.title}>{this.state.variant.book.title}</Text>
                    <Text style={styles.author}>{this.state.variant.book.authors ? this.state.variant.book.authors[0] : ''}</Text>

                    {/* ratings */}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        { renderRatingStars(this.state.variant.book.ratings) }
                    </View>

                    {/* recommmended by */}
                    <Text style={{marginRight: 10}}>Recommended by <Text style={{fontWeight: 'bold'}}>{this.state.variant.friend.first_name + ' ' + this.state.variant.friend.last_name }</Text>
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }

    renderImage() {
        if (this.state.variant.book.image) {
            return <Image source={{ uri: this.state.variant.book.image }} style={styles.cardImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.cardImage} />
    }

    componentWillReceiveProps(nextProps) {
        this.setState({variant: nextProps.variant});
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
    statusContainer: {
        // alignSelf: 'flex-end',
    },
    status: {
        color: '#8c1515'
    },
    switchContainer: {
        flexDirection: 'row'
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // transform: [{ scaleX: .7 }, { scaleY: .6 }]
    }
})