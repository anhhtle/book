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
        let props = this.props;

        return (
            <View style={styles.container}>
                <Image source={{ uri: props.request.variant.book.image }} style={styles.bookImage} />

                <View style={{flex: 1}}>
                    {this.renderCardBody()}

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
        if (this.props.request.status === 'Cancelled') {
            return this.renderCancelled();
        } else if (this.props.request.status === 'Recieved') {
            return this.renderRecieved();
        }
    }
    renderCancelled () {
        return (
            <Text style={styles.cardText}>Your request for <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> from <Text style={{fontWeight: 'bold'}}>{this.props.request.owner.first_name + ' ' + this.props.request.owner.last_name}</Text> was cancelled. You were refunded 1 book token.</Text>
        )
    }
    renderRecieved () {
        return (
            <Text style={styles.cardText}>You recieved <Text style={{fontWeight: 'bold'}}>{this.props.request.variant.book.title}</Text> courtesy of <Text style={{fontWeight: 'bold'}}>{this.props.request.owner.first_name + ' ' + this.props.request.owner.last_name}</Text>. Happy reading!</Text>
        )
    }
    renderButtons () {
        if (this.props.request.status === 'Recieved') {
            if (!this.props.request.thanked_owner) {
                return (
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.thanksButton}>
                            <Text style={{textAlign: 'center'}}>THANKS {this.props.request.owner.first_name.toUpperCase() + ' ' + this.props.request.owner.last_name.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                )
            } else {
                return (
                    <View style={styles.thankedContainer}>
                        <Text style={{textAlign: 'center'}}>You thanked <Text style={{fontWeight: 'bold'}}>{this.props.request.owner.first_name + ' ' + this.props.request.owner.last_name}</Text></Text>
                    </View>
                )
            }
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
    buttonsContainer: {
        marginBottom: 32,
        alignItems: 'center'
    },
    thanksButton: {
        paddingVertical: 5,
        width: 140,
        borderRadius: 5,
        backgroundColor: 'gold'
    },
    thankedContainer: {
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