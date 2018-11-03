import React from 'React';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";

import { connect } from 'react-redux';

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
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleRequestBook = this.handleRequestBook.bind(this);
    }

    render () {
        if (this.props.variantShare.length === 0) {
            return (
                <ScrollView style={styles.container}>
                    <ShareHeader navigation={this.props.navigation} />
                    <Text>No result</Text>
                </ScrollView>
            )
        }
        
        return (
            <ScrollView style={styles.container}>
                <ShareHeader navigation={this.props.navigation} />

                { this.renderResultCards() }

                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    item={this.props.variantShare[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    requestBook={() => this.handleRequestBook(this.props.variantShare[this.state.indexSelected].book._id)}
                    />
            </ScrollView>
        )
    }

    renderResultCards() {
        let arr = [];
        this.props.variantShare.forEach((item, index) => {
            arr.push(<ResultCard item={item} key={index} showModal={() => this.handleShowModal(index)} />)
        });

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
        flex: 1
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
    const  { variantShare } = state;
    return { variantShare }
}

export default connect(mapStateToProps)(ShareBooksScreen);