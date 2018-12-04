import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendRequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    render () {
        return (
            <View style={styles.container}>
                
                {/* more option */}
                <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} style={styles.moreIcon} />
                </TouchableOpacity>

                <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })} style={styles.modalOverlay}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={{padding: 5}}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                {/* end more option */}

                <Image resizeMethod="resize" source={{url: this.props.request.requester.avatar.image}} style={styles.contactImage} />

                <View style={styles.contactDetail}>
                    <Text style={styles.contactName}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text>
                    <Text style={styles.contactAliasContainer}>{this.renderAlias()}{this.renderJob()}</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff'}}>Connect</Text>
                </TouchableOpacity>

            </View>
        );
    }

    renderAlias() {
        if (this.props.request.requester.alias) {
            return (<Text style={styles.contactAlias}>{this.props.request.requester.alias}</Text>)
        }
    }
    renderJob() {
        if (this.props.request.requester.alias && this.props.request.requester.job) {
            return ', ' + this.props.request.requester.job
        } else if (this.props.request.requester.job) {
            return this.props.request.requester.job;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        alignItems: 'center',
        marginVertical: 10
    },
    contactImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        // resizeMode: 'contain',
        marginBottom: 10
    },
    contactDetail: {
        alignItems: 'center',
        marginBottom: 10
    },
    contactName: {
        fontSize: 14,
    },
    contactAliasContainer: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    contactAlias: {
        color: '#8c1515'
    },
    button: {
        backgroundColor: '#0073b1',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    moreIcon: {
        fontSize: 18,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 10,
        width: 200
    }
});