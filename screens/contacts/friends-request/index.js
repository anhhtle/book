import React from 'react';
import { ScrollView, Text, View, StyleSheet, } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriendRequests, acceptFriendRequest, deleteFriendRequest } from 'thebooksjourney/redux/actions/friend';
import { getCurrentUser } from 'thebooksjourney/redux/actions/user';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendRequestCard from './FriendRequestCard';

class FriendsRequestScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handleAccept = this.handleAccept.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

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
        this.props.friendRequests.friend_requests.map((request, index) => {
            if(request.requestee._id === this.props.user._id) {
                arr.push(<FriendRequestCard key={request._id} accept={() => this.handleAccept(request._id, index)} request={request} delete={() => this.handleDelete(request._id, index)}/>)
            }
        })
        
        if (arr.length === 0) {
            arr = <Text style={{marginTop: 20}}>No request</Text>
        }
        return arr;
    }
    handleDelete(id, index) {
        this.props.deleteFriendRequest(this.props.user.token, id, index);
    }
    handleAccept(id, index) {
        this.props.acceptFriendRequest(this.props.user.token, id, index)
            .then(() => this.props.getCurrentUser(this.props.user.token))
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getFriendRequests, deleteFriendRequest, acceptFriendRequest,
        getCurrentUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsRequestScreen)