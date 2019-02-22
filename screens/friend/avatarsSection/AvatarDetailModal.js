import React from 'React';
import { ScrollView, View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Modal from "react-native-modal";


export default class AvatarDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userRatingModalVisible: false,
        }

    }

    render () {

        let props = this.props;
        
        return (
            <Modal isVisible={props.isVisible} onBackdropPress={props.closeModal} style={styles.modalOverlay}>
                <View style={styles.modal}>
                    <ScrollView>

                        <View style={{backgroundColor: '#8c1515', padding: 8, marginBottom: 10}}>
                            <Text style={styles.name}>{props.avatar.name}</Text>
                        </View>

                        {/* header */}
                        <View style={styles.header}>
                            <Image source={{ uri: props.avatar.image }} style={styles.avatarImage} />
                            <Text style={styles.quote}>{`"${props.avatar.quote}"`}</Text>
                        </View>

                        {/* unlock condition */}
                        <View style={styles.unlockRequirementContainer}>
                            <Text style={{color: '#8c1515', marginBottom: 5}}>UNLOCKED</Text>
                            <Text>{props.avatar.unlocked}</Text>
                        </View>

                    </ScrollView>
                </View>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    // modal
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

    // body
    header: {
        minHeight: 100,
        maxHeight: 120,
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    name: {
        color: '#fff'
    },
    avatarImage: {
        flex: 1,
        width: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    quote: {
        flex: 4,
        fontStyle: 'italic'
    },
    unlockRequirementContainer: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
});
