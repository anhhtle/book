import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet, } from 'react-native';
import Modal from "react-native-modal";


export default class EditAddressModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newValues: ''
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    render() {
        return (
            <Modal isVisible={this.props.isModalVisible} style={styles.modalOverlay}
            >
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Edit Address</Text>
                    </View>

                    <View>

                        <View>
                            <Text style={styles.label}>{this.props.label.label}</Text>
                            <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' 
                            value={this.state.newValues} 
                            onChangeText={(value) => this.handleInputChange(value)} 
                            />
                        </View>
                    
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

    componentWillReceiveProps = props => {
        this.setState({ newValues : props.label.value });
    }

    handleInputChange(value) {
        this.setState({newValues: value});
    }

    handleSave() {
        this.props.updateModal(this.props.label.key ,this.state.newValues);
        this.props.closeModal();
    }

    handleCancel() {
        this.setState({newValues: ''});

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
