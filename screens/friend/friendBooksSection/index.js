import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// component
import BookCard from 'thebooksjourney/screens/utility/BookCard';
import BookDetailModal from './BookDetailModal';

class friendBooksSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
            needModal: false,
            isModalVisible: false,
            indexSelected: null,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{this.props.variantsFriend.variantsFriend[0].user.first_name + ' ' + this.props.variantsFriend.variantsFriend[0].user.last_name}'s books</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FriendBooks')}>
                        <Text style={styles.browseLink}>Browse all...</Text>
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
    componentDidMount() {
        this.setModalIndex();
        console.log(this.props.variantsFriend.variantsFriend[0]);
    }
    componentWillReceiveProps() {
        this.setModalIndex();
    }
    setModalIndex() {
        let indexSelected = null;
        if (this.props.variantsFriend.variantsFriend.length > 0) {
            indexSelected = 0;
        }
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
    }
    renderBooks() {
        let arr = [];
        this.props.variantsFriend.variantsFriend.map((item, index) => {
            arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index)} />);
        });

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variantsFriend.variantsFriend[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})}
                />
            )
        } else {
            return null;
        }
    }
    handleShowModal(index) {
        this.setState({
            isModalVisible: true,
            indexSelected: index
        });
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
    const { variantsFriend } = state;
    return { variantsFriend }
}

export default connect(mapStateToProps)(friendBooksSection)