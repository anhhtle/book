import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// component
import BookCard from 'book/screens/utility/BookCard';
import BookDetailModal from 'book/screens/share/BookDetailModal';

class BooksAvailableSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
            requestBookId: '',
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleRequestBook = this.handleRequestBook.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Available books</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalBooksContainer}>
                        {this.renderBooks()}
                    </View>
                </ScrollView>
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ShareBooksScreen')} >
                    <Text style={styles.browseLink}>Browse all...</Text>
                </TouchableOpacity>

                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    item={this.props.variantShare[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    requestBook={() => this.handleRequestBook(this.props.variantShare[this.state.indexSelected].book._id)}
                    />
            </View>
        );
    }

    renderBooks() {
        let arr = [];
        this.props.variantShare.map((item, index) => {
            arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index) } />)
        })

        return arr;
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
    handleRequestBook(bookId) {
        this.setState({requestBookId: bookId, isModalVisible: false});
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        color: '#8c1515',
        fontWeight: 'bold'
    },
    horizontalBooksContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    bookCard: {
        flex: 1,
        height: 180,
        alignItems: 'center',
        margin: 5,
    },
    bookImage: {
        height: 130,
        width: 500,
        resizeMode: 'contain',
    },
    bookTitle: {
        marginTop: 5
    },
    browseLink: {
        color: '#4885ed',
        marginTop: 10,
        textAlign: 'right'
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
    const { variantShare } = state;
    return { variantShare }
}

export default connect(mapStateToProps)(BooksAvailableSection)