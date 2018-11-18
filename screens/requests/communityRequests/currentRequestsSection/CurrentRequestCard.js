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

                </View>
            </View>
        )
    }

    renderCardBody () {
        if (this.props.request.status === 'Requesting') {
            return this.renderRequesting();
        } else if (this.props.request.status === 'Accepted') {
            return this.renderAccepted();
        }
    }
    renderRequesting () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text> is requesting <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> from you. Accept request?</Text>
        )
    }
    renderAccepted () {
        return (
            <Text style={styles.cardText}>You accepted <Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text>'s request for <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text>. Let <Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text> know once you mailed the book.</Text>
        )
    }
    renderSent () {
        return (
            <Text style={styles.cardText}><Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> is on the way, courtesy of <Text style={{fontWeight: 'bold'}}>{this.props.request.requester.first_name + ' ' + this.props.request.requester.last_name}</Text>.</Text>
        )
    }
    renderHelperText () {
        if (this.props.request.status === 'Requesting' || this.props.request.status === 'Accepted') {
            return (
                <View style={styles.helperTextContainer}>
                    <Text style={styles.helperText}>Mailing address:</Text>
                    <Text style={styles.address}>{this.props.request.requester.address.country}</Text>
                    <Text style={styles.address}>{this.props.request.requester.address.street}</Text>
                    <Text style={styles.address}>{this.props.request.requester.address.city + ', ' + this.props.request.requester.address.state + ' ' + this.props.request.requester.address.zipcode}</Text>
                    <Text style={styles.address}>{this.props.request.requester.address.additional_info}</Text>
                </View>
            )
        }
    }
    renderButtons () {
        if (this.props.request.status === 'Requesting') {
            return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.positiveButton}>
                        <Text style={{textAlign: 'center'}}>ACCEPT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.negativeButton}>
                        <Text style={{textAlign: 'center', color: '#fff'}}>DECLINE</Text>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.request.status === 'Accepted') { 
            return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.positiveButton}>
                        <Text style={{textAlign: 'center'}}>SENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.negativeButton}>
                        <Text style={{textAlign: 'center', color: '#fff', fontSize: 13}}>CANCEL REQUEST</Text>
                    </TouchableOpacity>
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
    helperTextContainer: {
        marginBottom: 10,
        backgroundColor: 'lightgrey',
        padding: 5,
        borderRadius: 5
    },
    helperText: {
        fontStyle: 'italic'
    },
    address: {
        marginLeft: 20,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    positiveButton: {
        paddingVertical: 5,
        width: 130,
        borderRadius: 5,
        backgroundColor: 'gold'
    },
    negativeButton: {
        paddingVertical: 5,
        width: 130,
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