import React from 'React';
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";


import { renderRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class BookDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {

        let props = this.props;
        
        return (
            <Modal isVisible={props.isVisible} onBackdropPress={props.closeModal} style={styles.modalOverlay}>
                <View style={styles.modal}>
                    <ScrollView>

                        <View style={{backgroundColor: '#8c1515', padding: 8, marginBottom: 10}}>
                            <Text style={styles.title}>{props.item.volumeInfo.title}</Text>
                        </View>

                        {/* header */}
                        <View style={styles.header}>
                            { this.renderImage() }
                            <View style={styles.headerDetail}>
                                <Text style={styles.author}>{props.item.volumeInfo.authors ? props.item.volumeInfo.authors[0] : ''}</Text>
                                { this.renderCategories() }

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    { renderRatingStars(props.item.volumeInfo.averageRating) }
                                </View>

                            </View>
                        </View>
                        {/* end header */}

                        <View style={styles.descriptionContainer}>
                            <Text>{props.item.volumeInfo.description}</Text>
                        </View>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cancleButton} onPress={props.closeModal}>
                                <Text style={{color: '#fff'}}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.requestButton} onPress={props.addBook}>
                                <Text style={{color: '#000'}}>ADD BOOK</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

            </Modal>
        )
    }

    renderImage() {
        if (this.props.item.volumeInfo.imageLinks) {
            return <Image source={{ uri: this.props.item.volumeInfo.imageLinks.smallThumbnail}} style={styles.bookImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
    }
    renderCategories() {
        if (this.props.item.volumeInfo.categories) {
            let str = '';
            this.props.item.volumeInfo.categories.map((cat, index) => {
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
    ownerContainer: {
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cancleButton: {
        backgroundColor: '#8c1515',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 20,
        borderRadius: 5,
    },
    requestButton: {
        backgroundColor: 'gold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 5,
    }
});
