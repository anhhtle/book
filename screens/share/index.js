import React from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Alert, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from 'thebooksjourney/redux/actions/user';
import { getVariantsShare, searchVariantsShare } from 'thebooksjourney/redux//actions/variantShare';
import { getBookRequests, createBookRequest } from 'thebooksjourney/redux//actions/request';

import ShareHeader from './ShareHeader';
import ResultCard from './ResultCard';
import BookDetailModal from './BookDetailModal';
import BookmarksTracker from 'thebooksjourney/screens/utility/BookmarksTracker';


class ShareBooksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
            requestBookId: '',
            search_term: '',
            searched: false,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleRequestBook = this.handleRequestBook.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.renderBookDetailModal = this.renderBookDetailModal.bind(this);
    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <ShareHeader navigation={this.props.navigation} searched={this.state.searched} setSearchTerm={(term) => this.setState({search_term: term})} />

                    <View style={styles.body}>
                        <View style={styles.cardsContainer}>
                            { this.renderResultCards() }
                        </View>

                        <View style={styles.paginationContainer}>
                            { this.renderPreviousPagination() }
                            { this.renderNextPagination() }
                        </View>
                    </View>

                    { this.renderBookDetailModal() }

                </ScrollView>
                <BookmarksTracker navigation={this.props.navigation} silver={this.props.user.bookmarks.silver} gold={this.props.user.bookmarks.gold}/>
            </View>
        )
    }
    renderResultCards() {
        if(this.props.variantsShare.variants_share.length === 0) {
            return (
                <Text style={styles.noResult}>No result</Text>
            )
        }

        let arr = [];
        this.props.variantsShare.variants_share.forEach((item, index) => {
            arr.push(<ResultCard variant={item} key={index} showModal={() => this.handleShowModal(index)} />)
        });

        return arr;
    }
    renderPreviousPagination() {
        if (!this.props.variantsShare.error) {
            if (this.props.variantsShare.page > 1 && this.props.variantsShare.pages > 1) {
                return (<TouchableOpacity onPress={this.handlePrev}>
                    <Text style={styles.prev}>Prev</Text>
                </TouchableOpacity>)
            }
        }
    }
    renderNextPagination() {
        if (!this.props.variantsShare.error) {
            if (this.props.variantsShare.page < this.props.variantsShare.pages) {
                return (<TouchableOpacity onPress={this.handleNext}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>)
            }
        }
    }
    renderBookDetailModal() {
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
        if (this.props.user.bookmarks.silver === 0 && this.props.user.bookmarks.gold === 0) {
            Alert.alert(
                'No bookmark available',
                'You need one bookmark to make a request. Your silver bookmarks will refresh every week.',
                [
                    {   
                        text: 'Ok', 
                        onPress: () => {
                            this.setState({
                                isModalVisible: false,
                                indexSelected: 0
                            })
                        }
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

            Alert.alert(
                'Request confirmation',
                alertText,
                [
                    {   
                        text: 'Cancel', 
                        onPress: () => {
                            this.setState({
                                isModalVisible: false,
                                indexSelected: 0
                            })
                        }
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
    handleNext() {
        let bodyObj = {
            query: this.state.search_term,
            page: ++this.props.variantsShare.page
        }
        this.props.searchVariantsShare(this.props.user.token, bodyObj);
        this.setState({searched: true});
    }
    handlePrev() {
        let bodyObj = {
            query: this.state.search_term,
            page: --this.props.variantsShare.page
        }
        this.props.searchVariantsShare(this.props.user.token, bodyObj);
        this.setState({searched: true});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    cardsContainer: {
        marginBottom: 50
    },

    // pagination
    paginationContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    prev: {
        fontSize: 16,
        color: 'blue',
        marginRight: 20
    },
    next: {
        fontSize: 16,
        color: 'blue',
    },

    noResult: {
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },

    // modal
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 10,
        width: Dimensions.get('window').width * 0.9
    },
});

const mapStateToProps = (state) => {
    const  { user, variantsShare } = state;
    return { user, variantsShare }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser,
        searchVariantsShare, getVariantsShare, 
        getBookRequests, createBookRequest
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ShareBooksScreen)
