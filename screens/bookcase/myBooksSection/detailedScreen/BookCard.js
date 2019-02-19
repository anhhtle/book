import React from 'React';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import { renderRatingStars, renderUserRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: this.props.variant,
            switchValue: true 
        };

        this.handleSaveChanges = this.handleSaveChanges.bind(this);
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
                        <Text>Average ratings: </Text>
                        { this.renderRating() }
                    </View>

                    {/* user ratings */}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text>My rating: </Text>
                        { this.renderUserRating() }
                    </View>

                    {/* status*/}
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text>Status: </Text>
                        <Text style={{color: '#8c1515'}}>{this.props.variant.status}</Text>
                    </View>

                    {/* share? */}
                    <View style={styles.switchContainer}>
                        <Text style={{marginRight: 10}}>Available for community?</Text>
                        <Switch
                            disabled={this.state.variant.share_requested}
                            value={this.state.variant.available_for_share}
                            onValueChange={(val) => this.handleSaveChanges(val)}
                            circleSize={20}
                            barHeight={20}
                            circleBorderWidth={2}
                            activeText={'On'}
                            inActiveText={'Off'}
                            backgroundActive={'gold'}
                            backgroundInactive={'gray'}
                            />

                    </View>

                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Text style={{color: 'blue', fontStyle: 'italic'}}>{this.state.variant.share_requested ? 'This book is currently being requested' : ''}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({variant: nextProps.variant});
    }
    renderImage() {
        if (this.state.variant.book.image) {
            return <Image source={{ uri: this.state.variant.book.image }} style={styles.cardImage} />
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
            return renderUserRatingStars(this.state.variant.user_rating)
        }
        return renderUserRatingStars(0)
    }
    handleSaveChanges(val) {
        const saveObj = {
            variant_id: this.props.variant._id,
            update: {
                available_for_share: val
            }
        }
        this.props.saveChanges(saveObj);
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
    statusContainer: {
        // alignSelf: 'flex-end',
    },
    status: {
        color: '#8c1515'
    },
    switchContainer: {
        flexDirection: 'row',
        marginBottom: 5
    }
})