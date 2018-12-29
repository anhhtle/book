import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isModalVisible: false
        }
    }

    render() {
        const props = this.props;

        return (
            <View style={styles.container}>
                <Image resizeMethod="resize" source={{url: props.friend.avatar.image}} style={styles.contactImage} />
    
                <View style={styles.rightSideContainer}>
                    <View>
                        <Text style={styles.contactName}>{props.friend.first_name + ' ' + props.friend.last_name}</Text>
                        <Text style={styles.contactAliasContainer}>{this.renderAlias()}{this.renderJob()}</Text>
                    </View>
    
                    <TouchableOpacity style={styles.actionBtnContainer} onPress={() => this.setState({isModalVisible: !this.state.isModalVisible})}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} style={styles.moreIcon} />
                    </TouchableOpacity>

                    <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })} style={styles.modalOverlay}>
                        <View style={styles.modal}>
                            <TouchableOpacity style={{padding: 5}} onPress={props.delete}>
                                <Text>Remove contact</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
    
            </View>
        );
    }
    renderAlias() {
        if (this.props.friend.alias) {
            return (<Text style={styles.contactAlias}>{this.props.friend.alias}</Text>)
        }
    }
    renderJob() {
        if (this.props.friend.alias && this.props.friend.job) {
            return ', ' + this.props.friend.job
        } else if (this.props.friend.job) {
            return this.props.friend.job;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row'
    },
    contactImage: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    rightSideContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contactName: {
        fontSize: 16,
    },
    contactAliasContainer: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    contactAlias: {
        color: '#8c1515'
    },
    actionBtnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
    moreIcon: {
        fontSize: 18
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