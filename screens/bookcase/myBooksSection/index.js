import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// component
import BookCard from 'book/screens/utility/BookCard';
import BookDetailModal from './BookDetailModal';

class MyBooksSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
            isModalVisible: false,
            indexSelected: 0,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>My books</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyBooks')}>
                        <Text style={styles.browseLink}>Browse all...</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.horizontalBooksContainer}>
                        {this.renderBooks()}
                    </View>
                </ScrollView>

                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    saveChanges={() => this.handleSaveChanges(this.props.variants[this.state.indexSelected].book._id)}
                    />
                
            </View>
        );
    }

    renderBooks() {
        let arr = [];
        this.props.variants.map((variant, index) => {
            if (variant.status !== 'Recommended') {
                arr.push(<BookCard book={variant.book} key={variant._id} showModal={() => this.handleShowModal(index)} />)
            }
        })

        return arr;
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
    }
    handleSaveChanges(bookId) {
        this.setState({requestBookId: bookId, isModalVisible: false});
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        backgroundColor: '#8c1515',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    browseLink: {
        color: '#fff',
        fontWeight: 'bold'
    },
    horizontalBooksContainer: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
});

const mapStateToProps = (state) => {
    const { variants } = state
    return { variants }
};
  
export default connect(mapStateToProps)(MyBooksSection);