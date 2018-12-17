import React, { Component } from 'react';
import { ScrollView, Text, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookRequests, createBookRequest } from 'book/redux/actions/request';
import { getVariantsShare } from 'book/redux/actions/variantShare';

// component
import BookCard from 'book/screens/utility/BookCard';
import BookDetailModal from 'book/screens/share/BookDetailModal';

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
                        <Text style={styles.headerText}>Browse all...</Text>
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
        Alert.alert(
            'Request confirmation',
            'Are you sure?',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        this.requestInitiate(id)
                    }
                },
                {   
                    text: 'Cancel', 
                    onPress: () => {
                        this.setState({
                            isModalVisible: false,
                            indexSelected: 0
                        })
                    }
                },
            ]
        )
    }
    requestInitiate(id) {
        this.props.createBookRequest(this.props.user.token, {variant_id: id})
            .then(() => {
                this.props.getBookRequests(this.props.user.token)
                    .then(() => {
                        if(!this.props.variantsShare.error) {
                            this.props.getVariantsShare(this.props.user.token, {page: 1});
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
        backgroundColor: '#8c1515',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        color: '#fff'
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
        getBookRequests, createBookRequest, getVariantsShare
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(BooksAvailableSection)