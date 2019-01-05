import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants, updateVariant, deleteVariant } from 'thebooksjourney/redux//actions/variant';

// component
import WatchlistBookModal from './WatchlistBookModal';
import BookCard from 'thebooksjourney/screens/utility/BookCard';

class WatchlistBooksSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
            renderComponent: false,
            needModal: false,
            isModalVisible: false,
            indexSelected: null,
        }

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleSaveChanges = this.handleSaveChanges.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <View>
                { this.renderComponent() }            
            </View>
        );
    }
    componentDidMount() {
        this.setModalIndex();
    }
    componentWillReceiveProps() {
        this.setModalIndex();
    }
    renderComponent() {
        if (this.state.renderComponent) {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Watchlist</Text>
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Watchlist')}>
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
            )
        }
    }
    setModalIndex() {
        let indexSelected = null;
        let count = 0;
        this.props.variants.variants.map((item, index) => {
            if (item.status === 'Watchlist') {
                indexSelected = index;
                count++;
            }
        });
        if (indexSelected !== null) {
            this.setState({indexSelected, needModal: true})
        } else {
            this.setState({needModal: false})
        }
        if (count > 0) {
            this.setState({renderComponent: true});
        }
    }
    renderBooks() {
        let arr = [];
        this.props.variants.variants.map((item, index) => {
            if (item.status === 'Watchlist') {
                arr.push(<BookCard book={item.book} key={item._id} showModal={() => this.handleShowModal(index)}/>)
            }
        })

        return arr;
    }
    renderModal() {
        if (this.state.needModal) {
            return (
                <WatchlistBookModal 
                    isVisible={this.state.isModalVisible} 
                    variant={this.props.variants.variants[this.state.indexSelected]} 
                    closeModal={() => this.setState({isModalVisible: false})} 
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
    handleSaveChanges(saveObj) {
        this.props.updateVariant(this.props.user.token, saveObj)
            .then(() => {
                this.props.getVariants(this.props.user.token);
            });
            
        this.setState({isModalVisible: false});
    }
    handleDelete(id) {
        this.props.deleteVariant(this.props.user.token, id)
        .then(() => {
                this.setState({isModalVisible: false});
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
        backgroundColor: '#0B4F6C',
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
    const { user, variants } = state
    return { user, variants }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants, updateVariant, deleteVariant
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(WatchlistBooksSection);