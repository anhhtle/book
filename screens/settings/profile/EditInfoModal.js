import React, { Component } from 'react';
import { View, Text, Button, Dimensions, StyleSheet, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";


export default class EditInfoModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isVisible={this.props.isModalVisible} style={styles.modalOverlay}
            >
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>hiii</Text>
                        <Button title={'close'} onPress={this.props.closeModal} />
                    </View>
                </View>
            </Modal>
        )
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
});