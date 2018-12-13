import React from 'React';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariantsShare, searchVariantsShare } from 'book/redux/actions/variantShare';

import ShareHeader from './ShareHeader';
import ResultCard from './ResultCard';
import BookDetailModal from './BookDetailModal';


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
            arr.push(<ResultCard item={item} key={index} showModal={() => this.handleShowModal(index)} />)
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
        console.log('close modal')
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
    handleRequestBook() {
        console.log('requesting book');
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
        searchVariantsShare, getVariantsShare
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ShareBooksScreen)
