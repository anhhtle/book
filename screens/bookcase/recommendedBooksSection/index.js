import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// component
import RecommendedBookModal from './RecommendedBookModal';
import BookCard from 'book/screens/utility/BookCard';

class RecommendedBookSection extends Component {
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
                    <Text style={styles.headerTitle}>Recommended to you</Text>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RecommendedBooks')}>
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
    }
    componentWillReceiveProps() {
        this.setModalIndex();
    }
    setModalIndex() {
        let indexSelected = null;
        this.props.variants.variants.map((item, index) => {
            if (item.status === 'Recommended') {
                indexSelected = index;
            }
        });
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
    }
    renderBooks() {
        let arr = [];
        this.props.variants.variants.map((item, index) => {
            if (item.status === 'Recommended') {
                arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index)}/>)
            }
        })

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <RecommendedBookModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
                    saveChanges={() => this.handleSaveChanges()}
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
    handleSaveChanges() {
        this.setState({isModalVisible: false});
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
  
export default connect(mapStateToProps)(RecommendedBookSection);