import React from 'react';
import { ScrollView, Text, View, StyleSheet, } from 'react-native';

import {API_BASE_URL} from 'book/screens/utility/helperFunctions';

// redux
import { connect } from 'react-redux';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendRequestCard from './FriendRequestCard';

class FriendsRequestScreen extends React.Component {
    render () {
        return (
            <ScrollView style={styles.container} removeClippedSubviews={true}>
                <ContactsHeader navigation={this.props.navigation} />
                <ContactsSubheader navigation={this.props.navigation} />

                <View style={styles.friendsRequestCardContainer}>
                    {this.renderCards()}
                </View>
            </ScrollView>
        )
    }

    renderCards() {
        let arr = [];
        this.props.friendRequests.map(request => {
            if(request.requestee._id === this.props.user._id) {
                arr.push(<FriendRequestCard key={request._id} request={request} />)
            }
        })
        
        if (arr.length === 0) {
            arr = <Text>No request</Text>
        }
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    friendsRequestCardContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    const { user, friendRequests } = state;
    return { user, friendRequests }
}

export default connect(mapStateToProps)(FriendsRequestScreen)