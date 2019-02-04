import React from 'React';
import { ScrollView, View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { renderRatingStars, renderUserRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class BookDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: this.props.variant,
            
            // save changes
            user_rating: this.props.variant.user_rating,
            book_condition: this.props.variant.book_condition,
            status: this.props.variant.status,
            progress: this.props.variant.progress,
            available_for_share: this.props.variant.available_for_share
        }
    }

    render () {

        let props = this.props;
        
        return (
            <Modal isVisible={props.isVisible} onBackdropPress={props.closeModal} style={styles.modalOverlay}>
                <View style={styles.modal}>
                    <ScrollView>

                        <View style={{backgroundColor: '#8c1515', padding: 8, marginBottom: 10}}>
                            <Text style={styles.title}>{props.variant ? props.variant.book.title: ''}</Text>
                        </View>

                        {/* header */}
                        <View style={styles.header}>
                            { this.renderImage() }
                            <View style={styles.headerDetail}>
                                <Text style={styles.author}>{props.variant ? props.variant.book.authors[0] : ''}</Text>

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 10}}>Average ratings:</Text>
                                    {this.renderRating()}
                                </View>
                                
                                {/* user ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 10}}>My rating:</Text>
                                    { this.renderUserRating() }
                                </View>
                            </View>
                        </View>
                        {/* end header */}

                        {/* book description */}
                        <View style={styles.descriptionContainer}>
                            <Text>{props.variant ? props.variant.book.description : ''}</Text>
                        </View>
                        {/* end book description */}

                        {/* statuses */}
                        <View style={styles.statusContainer}>
                            {/* book condition */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book condition: </Text>
                                <Text style={{color: '#4885ed'}}>{props.variant ? this.state.variant.book_condition : ''}</Text>
                            </View>
                            {/* book status */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book status: </Text>
                                <Text style={{color: '#4885ed'}}>{props.variant ? this.state.status : ''}</Text>
                            </View>
                            {/* book progress */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book progress: </Text>
                                <Text style={{color: '#4885ed'}}>{props.variant ? this.state.variant.progress  + '%' : ''}</Text>
                            </View>
                            {/* sharing? */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Share with community? </Text>
                                <Text style={{color: '#4885ed'}}>{props.variant ? this.state.available_for_share ? 'Yes' : 'No' : ''}</Text>
                            </View>

                        </View>
                        {/* end statuses */}

                    </ScrollView>
                </View>

            </Modal>
        )
    }

    componentWillReceiveProps(nextProps) {
        let user_rating = 0;
        let book_condition = status = progress = available_for_share = '';
        if (nextProps.variant) {
            user_rating = nextProps.variant.user_rating;
            book_condition = nextProps.variant.book_condition;
            status = nextProps.variant.status;
            progress = nextProps.variant.progress;
            available_for_share = nextProps.variant.available_for_share;
        }

        this.setState({
            variant: nextProps.variant,
            user_rating,
            book_condition,
            status,
            progress,
            available_for_share
        });
    }

    renderImage() {
        if (this.props.variant) {
            if (this.props.variant.book.image) {
                return <Image source={{ uri: this.props.variant.book.image }} style={styles.bookImage} />
            }
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
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
}

const styles = StyleSheet.create({
    // modal
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        flex: 0.8,
        backgroundColor: '#fff',
        padding: 10,
        width: Dimensions.get('window').width * 0.9
    },
    userRatingModal: {
        backgroundColor: '#fff'
    },
    userRatingStarsContainer: {
        flexDirection: 'row',
        marginBottom: 5
    },

    // body
    header: {
        minHeight: 100,
        maxHeight: 120,
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    bookImage: {
        flex: 1,
        width: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    headerDetail: {
        flex: 4,
        paddingVertical: 7,
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
    },
    author: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    bookCondition: {
        fontWeight: 'bold',
    },
    descriptionContainer: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    // status section
    statusContainer: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    statusGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
});
