import React from 'React';
import { ScrollView, View, Alert, Image, Text, TouchableOpacity, Dimensions, Platform, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';

import ModalDropdown from 'react-native-modal-dropdown';

import { renderRatingStars, renderUserRatingStars } from 'thebooksjourney/screens/utility/helperFunctions';

export default class BookDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: this.props.variant,
            userRatingModalVisible: false,
            bookConditionDropdown: ['New', 'Like new', 'Fair', 'Used'],
            bookStatusDropdown: ['Read', 'Reading', 'Not started' ,'Watch list'],
            bookProgressDropdown: ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
            bookAvailableForShareDropdown: ['Yes', 'No'],
            
            // save changes
            user_rating: this.props.variant.user_rating,
            book_condition: this.props.variant.book_condition,
            status: this.props.variant.status,
            progress: this.props.variant.progress,
            available_for_share: this.props.variant.available_for_share
        }

        this.handleChangeUserRating = this.handleChangeUserRating.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleChangeProgress = this.handleChangeProgress.bind(this);
        this.handleChangeShare = this.handleChangeShare.bind(this);

        this.handleReset = this.handleReset.bind(this);
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

                                {/* ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 10}}>Average ratings:</Text>
                                    {this.renderRating()}
                                </View>
                                
                                {/* user ratings */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 10}}>My rating:</Text>
                                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.setState({userRatingModalVisible: true})} >
                                        { this.renderUserRating() }
                                    </TouchableOpacity>

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
                            <Text>{props.variant ? props.variant.book.description : ''}</Text>
                        </View>
                        {/* end book description */}

                        {/* statuses */}
                        <View style={styles.statusContainer}>
                            {/* book condition */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book condition:</Text>
                                <ModalDropdown 
                                    options={this.state.bookConditionDropdown}
                                    defaultValue={props.variant ? this.state.variant.book_condition : ''}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                    onSelect={(index, value) => this.setState({book_condition: value})}
                                />
                            </View>
                            {/* book status */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book status:</Text>
                                <ModalDropdown
                                    ref={'statusDropdown'}
                                    options={this.state.bookStatusDropdown}
                                    defaultValue={props.variant ? this.state.status : ''}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                    onSelect={(index, value) => this.handleChangeStatus(value)}
                                />
                            </View>
                            {/* book progress */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Book progress:</Text>
                                <ModalDropdown 
                                    ref={'progressDropdown'}
                                    options={this.state.bookProgressDropdown}
                                    defaultValue={props.variant ? this.state.variant.progress  + '%' : ''}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                    onSelect={(index, value) => this.handleChangeProgress(value)}
                                />
                            </View>
                            {/* sharing? */}
                            <View style={styles.statusGroup}>
                                <Text style={styles.dropdownLabel}>Share with community?</Text>
                                <ModalDropdown 
                                    options={this.state.bookAvailableForShareDropdown}
                                    defaultValue={props.variant ? this.state.available_for_share ? 'Yes' : 'No' : ''}
                                    animated={false}
                                    style={{backgroundColor: '#4885ed', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}}
                                    textStyle={{color: '#fff', fontSize: 14}}
                                    dropdownStyle={styles.dropdownStyle}
                                    dropdownTextStyle={styles.dropdownTextStyle}
                                    onSelect={(index, value) => this.handleChangeShare(value)}
                                />
                            </View>

                        </View>
                        {/* end statuses */}

                        {/* action buttons */}
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.deleteButton} onPress={this.handleDelete}>
                                <Text style={{color: '#8c1515'}}>DELETE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancleButton} onPress={props.closeModal}>
                                <Text style={{color: '#fff'}}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
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
    handleChangeUserRating(rating) {
        let newStateVariant = Object.assign({}, this.state.variant);
        newStateVariant.user_rating = rating;
        this.setState({variant: newStateVariant, user_rating: rating, userRatingModalVisible: false})
    }
    handleChangeStatus(status) {
        let newProgress = this.state.variant.progress;
        if (status === 'Read') {
            newProgress = 100;
        } else if (status === 'Not started' || status === 'Watch list') {
            newProgress = 0;
        }

        let progressArr = [0,10,20,30,40,50,60,70,80,90,100];

        this.setState({status, progress: newProgress});
        this.refs.progressDropdown.select(progressArr.indexOf(newProgress));
    }
    handleChangeProgress(progress) {
        let newStatus = this.state.variant.status;
        if (progress === '100%') {
            newStatus = 'Read';
        } else if (progress === '0%') {
            newStatus = 'Not started';
        } 
        else {
            if (newStatus !== 'Reading') {
                newStatus = 'Reading';
            }
        }

        let statusIndex = 0;
        this.state.bookStatusDropdown.map((status, index) => {
            if (newStatus === status) {
                statusIndex = index;
            }
        });

        let newProgress;
        let progressArr = [0,10,20,30,40,50,60,70,80,90,100];
        progressArr.map((p) => {
            if (progress === p + '%') {
                newProgress = p;
            }
        })

        this.setState({status: newStatus, progress: newProgress});
        this.refs.statusDropdown.select(statusIndex);   
    }
    handleChangeShare(share) {
        let newShare = true;
        if (share === 'No') {
            newShare = false;
        }
        let newStateVariant = Object.assign({}, this.state.variant);
        newStateVariant.available_for_share = newShare;
        this.setState({variant: newStateVariant, available_for_share: newShare});
    }
    handleReset() {
        
    }
    handleSave() {
        const saveObj = {
            variant_id: this.props.variant._id,
            update: {
                user_rating: this.state.user_rating,
                book_condition: this.state.book_condition,
                status: this.state.status,
                progress: this.state.progress,
                available_for_share: this.state.available_for_share
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    deleteButton: {
        position: 'absolute',
        left: 0
    },
    cancleButton: {
        backgroundColor: '#8c1515',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 20,
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: 'gold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 5,
    }
});
