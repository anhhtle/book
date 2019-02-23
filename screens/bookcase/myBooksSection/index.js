import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants, updateVariant, deleteVariant } from 'thebooksjourney/redux//actions/variant';

// component
import BookCard from 'thebooksjourney/screens/utility/BookCard';
import BookDetailModal from './BookDetailModal';

class MyBooksSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
            needModal: false,
            isModalVisible: false,
            indexSelected: null,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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
            if (item.status !== 'Recommended') {
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
            if (item.status !== 'Recommended' && item.status !== 'Watchlist') {
                arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index)} />);
            }
        });

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <BookDetailModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants.variants[this.state.indexSelected]} 
                    closeModal={this.handleCloseModal} 
                    saveChanges={this.handleSaveChanges}
                    delete={this.handleDelete}
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
    handleCloseModal() {
        this.setState({
            isModalVisible: false
        });
    }
    handleSaveChanges(saveObj) {
        this.props.updateVariant(this.props.user.token, saveObj)
            .then(() => {
                this.props.getVariants(this.props.user.token);
            });
            
        this.setState({isModalVisible: false});
    }
    handleDelete(id) {
        this.setState({isModalVisible: false});
        this.props.deleteVariant(this.props.user.token, id)
            .then(() => {
                this.props.getVariants(this.props.user.token);
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
    const { user, variants } = state;
    return { user, variants }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants, updateVariant, deleteVariant
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksSection)