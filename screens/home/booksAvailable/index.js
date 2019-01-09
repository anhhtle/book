import React, { Component } from 'react';
import { ScrollView, Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookRequests, createBookRequest } from 'thebooksjourney/redux/actions/request';
import { getVariantsShare } from 'thebooksjourney/redux/actions/variantShare';
import { getCurrentUser } from 'thebooksjourney/redux/actions/user';

// component
import BookCard from 'thebooksjourney/screens/utility/BookCard';
import BookDetailModal from 'thebooksjourney/screens/share/BookDetailModal';

class BooksAvailableSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleRequestBook = this.handleRequestBook.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Available books</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ShareBooksScreen')} >
                        <Text style={styles.headerLink}>Browse all...</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalBooksContainer}>
                        {this.renderBooks()}
                    </View>
                </ScrollView>
                
                {this.renderModal()}

            </View>
        );
    }

    renderBooks() {
        let arr = [];
        this.props.variantsShare.variants_share.map((item, index) => {
            arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index) } />)
        })

        return arr;
    }
    renderModal() {
        if (this.props.variantsShare.variants_share.length > 0) {
            return (
                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    item={this.props.variantsShare.variants_share[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    requestBook={this.handleRequestBook}
                    />
            )
        }
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
    handleRequestBook(id) {
        // check address
        if (!this.props.user.address.street ||
            !this.props.user.address.city ||
            !this.props.user.address.state) {
            return Alert.alert(
                'Missing address',
                'Please fill out your mailing address.',
                [
                    {   
                        text: 'Cancel'
                    },
                    {
                        text: 'Update address',
                        onPress: () => {
                            this.setState({
                                isModalVisible: false
                            });
                            this.props.navigation.navigate('EditProfile');
                        }
                    }
                ]
            )
        }

        // check bookmarks
        if (this.props.user.bookmarks.silver === 0 && this.props.user.bookmarks.gold === 0) {
            Alert.alert(
                'No bookmark available',
                'You need one bookmark to make a request. Your silver bookmarks will refresh every week.',
                [
                    {   
                        text: 'Ok'
                    }
                ]
            )
        }
        else {
            let alertText;
            if (this.props.user.bookmarks.silver > 0) {
                alertText = 'This will initiate the user to mail you his/her book, and use 1 of your silver bookmark. Are you sure?'
            } else {
                alertText = 'This will initiate the user to mail you his/her book, and use 1 of your gold bookmark. Are you sure?'
            }

            alertText += `\n\nYour mailing address:\n\n${this.props.user.address.street}\n${this.props.user.address.city}, ${this.props.user.address.state} ${this.props.user.address.zipcode}\n${this.props.user.address.country}`

            if (this.props.user.address.additional_info) {
                alertText += `\n\n${this.props.user.address.additional_info}`;
            }

            Alert.alert(
                'Request confirmation',
                alertText,
                [
                    {   
                        text: 'Cancel', 
                    },
                    {
                        text: 'Yes',
                        onPress: () => {
                            this.requestInitiate(id)
                        }
                    }
                ]
            )
        }

    }
    requestInitiate(id) {
        this.props.createBookRequest(this.props.user.token, {variant_id: id})
            .then(() => {
                this.props.getBookRequests(this.props.user.token)
                    .then(() => {
                        if(!this.props.variantsShare.error) {
                            this.props.getVariantsShare(this.props.user.token, {page: 1});
                            this.props.getCurrentUser(this.props.user.token);
                            this.setState({
                                isModalVisible: false,
                                indexSelected: 0
                            });
                            this.props.navigation.navigate('MyRequests');
                        } else {
                            Alert.alert(
                                'Request not sent',
                                'Book is not available at the moment',
                                [
                                    {
                                        text: 'OK',
                                        onPress: () => {
                                            this.props.getVariantsShare(this.props.user.token, {page: 1});
                                            this.setState({
                                                isModalVisible: false,
                                                indexSelected: 0
                                            })
                                        }
                                    },
                                ]
                            )
                        }
                    })
            })
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#f7ee71',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        color: '#000'
    },
    headerLink: {
        fontWeight: 'bold',
        color: 'blue'
    },
    horizontalBooksContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    bookTitle: {
        marginTop: 5
    },
});

const mapStateToProps = (state) => {
    const { user, variantsShare } = state;
    return { user, variantsShare }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser,
        getBookRequests, createBookRequest, getVariantsShare
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(BooksAvailableSection)