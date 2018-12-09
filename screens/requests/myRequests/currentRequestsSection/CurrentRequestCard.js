import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {renderDate} from 'book/screens/utility/helperFunctions';

export default class CurrentRequestCard extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
        }
    }

    render () {
        let props = this.props;

        return (
            <View style={styles.container}>
                <Image source={{ uri: props.request.variant.book.image }} style={styles.bookImage} />

                <View style={{flex: 1}}>
                    {this.renderCardBody()}

                    {this.renderHelperText()}

                    {this.renderButtons()}

                    <View style={styles.dateContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} color={'#8c1515'} size={20}/>
                        <Text style={styles.date}>{renderDate(props.request.date)}</Text>
                    </View>

                    {this.renderHideRequest()}
                </View>
            </View>
        )
    }

    renderCardBody () {
        if (this.props.request.status === 'Requesting') {
            return this.renderRequesting();
        } else if (this.props.request.status === 'Accepted') {
            return this.renderAccepted();
        } else if (this.props.request.status === 'Sent') {
            return this.renderSent();
        }
    }
    renderRequesting () {
        return (
            <Text style={styles.cardText}>Your request for <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> is pending <Text style={{fontWeight: 'bold'}}>{this.props.request.original_owner.first_name + ' ' + this.props.request.original_owner.last_name}</Text>'s response.</Text>
        )
    }
    renderAccepted () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.original_owner.first_name + ' ' + this.props.request.original_owner.last_name}</Text> accepted your request for <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text>.</Text>
        )
    }
    renderSent () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> is on the way, courtesy of <Text style={{fontWeight: 'bold'}}>{this.props.request.original_owner.first_name + ' ' + this.props.request.original_owner.last_name}</Text>.</Text>
        )
    }
    renderHelperText () {
        if (this.props.request.status === 'Requesting') {
            return (
                <View style={styles.helperTextContainer}>
                    <Text style={styles.helperText}>The request will be automatically cancelled if the owner does not accept within 5 days. You will be refunded 1 book token</Text>
                </View>
            )
        } else if (this.props.request.status === 'Accepted') {
            return (
                <View style={styles.helperTextContainer}>
                    <Text style={styles.helperText}>You will be notified when the book is on its way</Text>
                </View>
            )
        }
    }
    renderButtons () {
        if (this.props.request.status === 'Sent') {
            return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.recievedButton}
                    onPress={() => this.props.action(
                        {request_id: this.props.request._id, status: 'Received'})
                    }>
                        <Text style={{textAlign: 'center'}}>RECIEVED</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.neverArrivedButton}
                    onPress={() => this.props.action(
                        {request_id: this.props.request._id, status: 'Not received'})
                    }>
                        <Text style={{textAlign: 'center', color: '#fff'}}>NEVER ARRIVED</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    renderHideRequest () {
        if (this.props.request.status === 'Accepted') {
            return (
                <TouchableOpacity style={styles.hideRequestContainer}
                onPress={() => this.props.action(
                    {request_id: this.props.request._id, hide_request: true})
                }>
                    <Text style={{color: '#8c1515'}}>Hide Request</Text>
                </TouchableOpacity>
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
    helperTextContainer: {
        marginBottom: 32,
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 5
    },
    helperText: {
        fontStyle: 'italic'
    },
    buttonsContainer: {
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    recievedButton: {
        paddingVertical: 5,
        width: 120,
        borderRadius: 5,
        backgroundColor: 'gold'
    },
    neverArrivedButton: {
        paddingVertical: 5,
        width: 120,
        borderRadius: 5,
        backgroundColor: '#8c1515'
    },
    dateContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    date: {
        marginLeft: 5,
        color: 'grey'
    },
    hideRequestContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})