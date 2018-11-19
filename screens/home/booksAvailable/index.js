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
    const { variantShare } = state;
    return { variantShare }
}

export default connect(mapStateToProps)(BooksAvailableSection)