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
                        <TouchableOpacity style={{padding: 5}}>
                            <Text>Block user</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                {/* end more option */}

                <Image resizeMethod="resize" source={{url: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p160x160/18740171_10159912486035206_6622147564938299870_n.jpg?_nc_cat=103&oh=6eb95480602160314126df82c0a378a9&oe=5C57E071'}} style={styles.contactImage} />

                <View style={styles.contactDetail}>
                    <Text style={styles.contactName}>Anh Le</Text>
                    <Text style={styles.contactAliasContainer}><Text style={styles.contactAlias}>Jamie Lannister</Text>, King's Guard</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{color: '#fff'}}>Connect</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        alignItems: 'center'
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
        textAlign: 'center'
    },
    contactAlias: {
        fontWeight: 'bold',
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