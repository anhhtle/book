import React from 'react';
import {View, Text, TouchableOpacity, Platform, Dimensions, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants, updateVariant } from 'thebooksjourney/redux//actions/variant';

import CurrentReadingCard from './CurrentReadingCard';
import CurrentReadingModalCard from './CurrentReadingModalCard'

class CurrentReadingSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderComponent: false,
            isModalVisible: false
        }

        this.handleBookSelection = this.handleBookSelection.bind(this);
        this.handleRemoveBook = this.handleRemoveBook.bind(this);
        this.handleChangeBookProgress = this.handleChangeBookProgress.bind(this);
    }
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Current reading</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => this.setState({ isModalVisible: true })}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} color={'#fff'} size={24}/>
                    </TouchableOpacity>
                </View>

                <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })} style={styles.modalOverlay}>
                    <View style={styles.modal}>
                        <View style={styles.header}>
                            <Text style={styles.headerTitle}>Select from your books collection</Text>
                        </View>

                        {this.renderModalBooks()}

                    </View>
                </Modal>

                {this.renderBooks()}
            </View>
        )
    }

    renderBooks () {
        let arr = [];
        this.props.variants.variants.forEach((item, index) => {
            if(item.status === 'Reading') {
                arr.push(<CurrentReadingCard variant={item} key={index} index={index} removeBook={this.handleRemoveBook} changeBookProgress={this.handleChangeBookProgress} />);
            }
        });

        return arr;
    }
    renderModalBooks() {
        let arr = [];
        this.props.variants.variants.forEach(item => {
            if (item.status !== 'Reading' && item.status !== 'Recommended' && item.status !== 'Watch list') {
                arr.push(<CurrentReadingModalCard variant={item} key={item._id} addBook={this.handleBookSelection}/>)
            }
        });

        if (arr.length === 0) {
            return(<Text style={{marginTop: 10}}>No book to add</Text>)
        }

        return arr;
    }
    handleBookSelection (id) {
        const updateObj = {
            variant_id: id,
            update: {
                status: 'Reading',
            }
        }

        this.props.updateVariant(this.props.user.token, updateObj)
            .then(() => {
                this.props.getVariants(this.props.user.token);
                this.setState({isModalVisible: false});
            });
    }
    handleRemoveBook (id) {
        const updateObj = {
            variant_id: id,
            update: {
                status: 'Not read',
                progress: 0
            }
        }

        this.props.updateVariant(this.props.user.token, updateObj)
            .then(() => {
                this.props.getVariants(this.props.user.token);
                this.setState({isModalVisible: false});
            });
    }

    handleChangeBookProgress (id, newProgress) {
        let status = 'Reading';
        if (newProgress === 100) {
            status = 'Read';
        }

        const updateObj = {
            variant_id: id,
            update: {
                progress: newProgress,
                status
            }
        }

        this.props.updateVariant(this.props.user.token, updateObj)
            .then(() => {
                this.props.getVariants(this.props.user.token);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#8c1515',
    },
    headerTitle: {
        flex: 1,
        padding: 5,
        color: '#fff',
        fontWeight: 'bold'
    },
    addButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 3,
        marginRight: 5
    },

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
    const { user, variants } = state
    return { user, variants }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants, updateVariant
    }, dispatch)
);
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrentReadingSection);