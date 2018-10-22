import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeUserInfo } from 'book/redux/actions';


export class EditInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newValues: ['hi', 'hello']
        }

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
        return (
            <Modal isVisible={this.props.isModalVisible} style={styles.modalOverlay}
            >
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Edit Info</Text>
                    </View>

                    <View>

                        {this.renderInputs()}
                    
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={this.handleCancel}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.saveButton} onPress={this.handleSave}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity >
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    renderInputs() {
        let arr = [];
        this.props.labels.forEach((item, index) => {
            arr.push(
                <View key={index}>
                    <Text style={styles.label}>{item.label}</Text>
                    <TextInput style={styles.textInput} value={this.props.user[item.key]} 
                    onChangeText={(value) => this.handleInputChange(index, value)} 
                    />
                </View>
            );
        });
        return arr;
    }

    handleInputChange(index, value) {
        let arr = this.state.newValues.slice();
        arr[index] = value;
        this.setState({newValues: arr});
    }

    handleSave() {
        this.props.labels.forEach((item, index) => {
            this.props.changeUserInfo(item.key, this.state.newValues[index]);
        });

        this.props.closeModal();
    }

    handleCancel() {
        let newValues = [];
        this.props.labels.forEach((item) => {
            newValues.push(this.props.user[item.key]);
        })

        this.setState({newValues});

        this.props.closeModal();
    }
}

const styles = StyleSheet.create({
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
    header: {
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 20
    }, 
    label: {
        color: 'grey',
        marginBottom: 5,
    },
    textInput: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        paddingVertical: 5,
        fontSize: 16,
        marginBottom: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    saveButton: {
        backgroundColor: 'lightblue',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: 70,
    },
    cancelButton: {
        backgroundColor: 'red',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        width: 70,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        changeUserInfo
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoModal);