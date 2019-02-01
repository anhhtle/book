import React from 'React';
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions, Alert, StyleSheet } from 'react-native';
import Modal from "react-native-modal";

import { renderRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class WatchlistBookModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
                                { this.renderCategories() }

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    { this.renderRating() }
                                </View>
                                
                            </View>
                        </View>
                        {/* end header */}

                        {/* book description */}
                        <View style={styles.descriptionContainer}>
                            <Text>{props.variant ? props.variant.book.description: ''}</Text>
                        </View>
                        {/* end book description */}

                        {/* action buttons */}
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.deleteButton} onPress={this.handleDelete}>
                                <Text style={{color: '#8c1515'}}>DELETE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addButton} onPress={this.handleSave}>
                                <Text style={{color: '#000'}}>ADD TO BOOKCASE</Text>
                            </TouchableOpacity>
                        </View>
                        {/* end action buttons */}

                    </ScrollView>
                </View>

            </Modal>
        )
    }
    renderImage() {
        if (this.props.variant) {
            if (this.props.variant.book.image) {
                return <Image source={{ uri: this.props.variant.book.image }} style={styles.bookImage} />
            }
        }

        // placeholder image if book don't have one
        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
    }
    renderCategories() {
        if (this.props.variant.book.categories) {
            let str = '';
            this.props.variant.book.categories.map((cat, index) => {
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
    renderRating() {
        if (this.props.variant) {
            if (this.props.variant.book.ratings) {
                return renderRatingStars(this.props.variant.book.ratings);
            }
        }
        return renderRatingStars(0)
    }
    handleSave() {
        const saveObj = {
            variant_id: this.props.variant._id,
            update: {
                status: 'Not started'
            }
        }
        this.props.saveChanges(saveObj);
    }
    handleDelete() {
        Alert.alert(
            'Delete confirmation',
            'Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        if (this.props.variant) {
                            this.props.delete(this.props.variant._id);
                        }
                    }
                },
                {   
                    text: 'Cancel', 
                },
            ]
        )
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
    },
    title: {
        color: '#fff',
    },
    author: {
        marginBottom: 5,
        fontWeight: 'bold'
    },
    categories: {
        marginBottom: 5,
        color: 'blue'
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

    // friend
    friendContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },


    //  action buttons section
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    deleteButton: {
        position: 'absolute',
        left: 0
    },
    addButton: {
        backgroundColor: 'gold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 5,
    }
});
