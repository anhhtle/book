import React from 'React';
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";

import ModalDropdown from 'react-native-modal-dropdown';

import { renderRatingStars, renderUserRatingStars } from 'book/screens/utility/helperFunctions';

export default class BookDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookConditionDropdown: ['New', 'Like new', 'Fair', 'Used'],
            bookStatusDropdown: ['Read', 'Reading', 'Not started' ,'Watch list'],
            bookProgressDropdown: ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
            bookAvailableForShareDropdown: ['Yes', 'No'],
        }
    }

    render () {

        let props = this.props;
        
        return (
            <Modal isVisible={props.isVisible} onBackdropPress={props.closeModal} style={styles.modalOverlay}>
                <View style={styles.modal}>
                    <ScrollView>

                        <View style={{backgroundColor: '#8c1515', padding: 8, marginBottom: 10}}>
                            <Text style={styles.title}>{props.variant.book.title}</Text>
                        </View>

                        {/* header */}
                        <View style={styles.header}>
                            { this.renderImage() }
                            <View style={styles.headerDetail}>
                                <Text style={styles.author}>{props.variant.book.authors ? props.variant.book.authors[0] : ''}</Text>

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    { renderRatingStars(props.variant.book.ratings) }
                                </View>
                                
                                {/* user ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 10}}>My rating:</Text>
                                    { renderUserRatingStars(props.variant.user_rating) }
                                </View>

                            
                            </View>
                        </View>
                        {/* end header */}

                        {/* book description */}
                        <View style={styles.descriptionContainer}>
                            <Text>{props.variant.book.description}</Text>
                        </View>
                        {/* end book description */}

                        {/* statuses */}
                        <View style={styles.statusContainer}>
                            {/* book condition */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book condition:</Text>
                                <ModalDropdown 
                                    options={this.state.bookConditionDropdown}
                                    defaultValue={props.variant.book_condition}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                />
                            </View>
                            {/* book status */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book status:</Text>
                                <ModalDropdown 
                                    options={this.state.bookStatusDropdown}
                                    defaultValue={props.variant.status}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                />
                            </View>
                            {/* book progress */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book progress:</Text>
                                <ModalDropdown 
                                    options={this.state.bookProgressDropdown}
                                    defaultValue={props.variant.progress  + '%'}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                />
                            </View>
                            {/* sharing? */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownShareLabel}>Share with community?</Text>
                                <ModalDropdown 
                                    options={this.state.bookAvailableForShareDropdown}
                                    defaultValue={props.available_for_share ? 'Yes' : 'No'}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                />
                            </View>

                        </View>
                        {/* end statuses */}

                        {/* action buttons */}
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cancleButton} onPress={props.closeModal}>
                                <Text style={{color: '#fff'}}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.requestButton} onPress={props.saveChanges}>
                                <Text style={{color: '#000'}}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                        {/* end action buttons */}

                    </ScrollView>
                </View>

            </Modal>
        )
    }

    renderImage() {
        if (this.props.variant.book.image) {
            return <Image source={{ uri: this.props.variant.book.image }} style={styles.bookImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
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
    dropdownLabel: {
        width: 140, 
        textAlign: 'right',
        marginRight: 10,
    },
    dropdownShareLabel: {
        color: '#8c1515',
        fontWeight: 'bold',
        width: 140, 
        textAlign: 'right',
        marginRight: 10,
    },
    dropdownStyle: {
        width: 100,
    },
    dropdownTextStyle: {
        color: '#000',
        fontSize: 12,
    },

    //  action buttons section
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
