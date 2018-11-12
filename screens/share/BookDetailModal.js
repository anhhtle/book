import React from 'React';
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";


import { renderRatingStars } from 'book/screens/utility/helperFunctions';

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
                            <Text style={styles.title}>{props.item.book.title}</Text>
                        </View>

                        {/* header */}
                        <View style={styles.header}>
                            { this.renderImage() }
                            <View style={styles.headerDetail}>
                                <Text style={styles.author}>{props.item.book.authors ? props.item.book.authors[0] : ''}</Text>

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    { renderRatingStars(props.item.book.ratings) }
                                </View>

                                <Text>Book condition: <Text style={styles.bookCondition}>{props.item.book_condition.toUpperCase()}</Text></Text>
                            </View>
                        </View>
                        {/* end header */}

                        <View style={styles.descriptionContainer}>
                            <Text>{props.item.book.description}</Text>
                        </View>

                        {/* owner section */}
                        <Text style={{color: '#8c1515', marginBottom: 10}}>OWNER</Text>
                        <View style={styles.ownerContainer}>
                            <Image source={{uri: props.item.user.avatar.image}} style={styles.profileImage}/>
                            <View>
                                <Text>{props.item.user.first_name} {props.item.user.last_name}</Text>
                                <Text>{this.renderAlias()}{this.renderJob()}</Text>
                            </View>
                        </View>
                        {/* end owner section */}

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cancleButton} onPress={props.closeModal}>
                                <Text style={{color: '#fff'}}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.requestButton} onPress={props.requestBook}>
                                <Text style={{color: '#000'}}>REQUEST BOOK</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>

            </Modal>
        )
    }

    renderImage() {
        if (this.props.item.book.image) {
            return <Image source={{ uri: this.props.item.book.image }} style={styles.bookImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
    }
    renderAlias() {
        if (this.props.item.user.alias) {
            return (<Text style={{color: '#8c1515', fontWeight: 'bold'}}>{this.props.item.user.alias}</Text>)
        }
    }
    renderJob() {
        if (this.props.item.user.alias && this.props.item.user.job) {
            return ', ' + this.props.item.user.job
        } else if (this.props.item.user.job) {
            return this.props.item.user.job;
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
