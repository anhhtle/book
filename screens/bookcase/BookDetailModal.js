import React from 'React';
import { ScrollView, View, Image, Text, TouchableOpacity, Dimensions, Platform, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';

import ModalDropdown from 'react-native-modal-dropdown';

import { renderRatingStars, renderUserRatingStars } from 'book/screens/utility/helperFunctions';

export default class BookDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userRatingModalVisible: false,
            userRating: 0,

            bookConditionDropdown: ['New', 'Like new', 'Fair', 'Used'],
            bookStatusDropdown: ['Read', 'Reading', 'Not started' ,'Watch list'],
            bookProgressDropdown: ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
            bookAvailableForShareDropdown: ['Yes', 'No'],
        }

        this.handleChangeUserRating = this.handleChangeUserRating.bind(this);
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
                                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({userRatingModalVisible: true})} >
                                        { renderUserRatingStars(props.variant.user_rating) }
                                    </TouchableOpacity>

                                    <Text>{this.state.userRating}</Text>

                                    <Modal isVisible={this.state.userRatingModalVisible} onBackdropPress={() => this.setState({userRatingModalVisible: false})} style={styles.modalOverlay}>
                                        <View style={styles.userRatingModal}>
                                            <View style={{backgroundColor: '#8c1515', padding: 10, marginBottom: 10}}>
                                                <Text style={{color: '#fff'}}>How do you like this book?</Text>
                                            </View>
                                            <View style={{paddingLeft: 20}}>
                                                <TouchableOpacity style={styles.userRatingStarsContainer} onPress={() => this.handleChangeUserRating(1)}>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.userRatingStarsContainer} onPress={() => this.handleChangeUserRating(2)}>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.userRatingStarsContainer} onPress={() => this.handleChangeUserRating(3)}>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.userRatingStarsContainer} onPress={() => this.handleChangeUserRating(4)}>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.userRatingStarsContainer} onPress={() => this.handleChangeUserRating(5)}>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                    <Ionicons name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} color={'#8c1515'} size={16}/>
                                                </TouchableOpacity>
                                            </View>
                                            
                                        </View>
                                    </Modal>

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

    componentWillReceiveProps(nextProps) {
        this.setState({userRating: nextProps.variant.user_rating});
    }

    renderImage() {
        if (this.props.variant.book.image) {
            return <Image source={{ uri: this.props.variant.book.image }} style={styles.bookImage} />
        }

        return <Image source={{ uri: 'https://www.edsportrallysupplies.ie/media/catalog/product/cache/1/image/256x256/9df78eab33525d08d6e5fb8d27136e95/i/m/image-placeholder-alt_2_1.jpg' }} style={styles.bookImage} />
    }
    handleChangeUserRating(rating) {
        this.setState({userRating: rating, userRatingModalVisible: false})
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
