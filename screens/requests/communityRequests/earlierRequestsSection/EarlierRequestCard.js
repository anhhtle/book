import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {renderDate} from 'book/screens/utility/helperFunctions';

export default class EarlierRequestCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
        }
    }

    render () {
        const props = this.props;

        return (
            <View style={styles.container}>
                <Image source={{ uri: props.request.variant.book.image }} style={styles.bookImage} />

                <View style={{flex: 1}}>
                    {this.renderCardBody()}
                    {this.renderThanks()}
                    {this.renderHelperText()}

                    <View style={styles.dateContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} color={'#8c1515'} size={20}/>
                        <Text style={styles.date}>{renderDate(props.request.updatedAt)}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderCardBody () {
        if (this.props.request.status === 'Sent') {
            return this.renderSent();
        } else if (this.props.request.status === 'Cancelled') {
            return this.renderCancelled();
        } else if (this.props.request.status === 'Recieved') {
            return this.renderRecieved();
        }
    }
    renderSent () {
        return (
            <Text style={styles.cardText}>You sent <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> to <Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text>.</Text>
        )
    }
    renderCancelled () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text>'s request for <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> was cancelled.</Text>
        )
    }
    renderRecieved () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text> recieved <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> from you.</Text>
        )
    }
    renderHelperText () {
        if (this.props.request.status === 'Sent' || this.props.request.thanked_owner) {
            return (
                <View style={styles.helperTextContainer}>
                    <Text style={{textAlign: 'center'}}>You recieved 1 book token!</Text>
                </View>
            )
        }
    }
    renderThanks () {
        if (this.props.request.thanked_owner) {
            return (
                <View style={styles.thanksContainer}>
                    <Text style={{textAlign: 'center', margin: 5}}><Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text> said "Thank you"</Text>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    bookImage: {
        height: 100,
        width: Dimensions.get('window').width / 4.5,
        resizeMode: 'contain',
        marginRight: 5
    },
    cardText: {
        marginBottom: 10,
    },
    thanksContainer: {
        marginBottom: 10,
        backgroundColor: '#99c0ff',
        borderRadius: 5,
    },
    helperTextContainer: {
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 5,
        marginBottom: 32,
    },
    dateContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3
    },
    date: {
        marginLeft: 5,
        color: 'grey'
    }
})