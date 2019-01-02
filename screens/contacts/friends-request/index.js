import React from 'react';
import { ScrollView, Text, View, StyleSheet, } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriendRequests, deleteFriendRequest } from 'thebooksjourney/redux/actions/friend';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendRequestCard from './FriendRequestCard';

class FriendsRequestScreen extends React.Component {
    constructor(props) {
        super(props);

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
        this.props.friendRequests.friend_requests.map(request => {
            if(request.requestee._id === this.props.user._id) {
                arr.push(<FriendRequestCard key={request._id} request={request} delete={() => this.handleDelete(request._id)}/>)
            }
        })
        
        if (arr.length === 0) {
            arr = <Text style={{marginTop: 20}}>No request</Text>
        }
        return arr;
    }
    handleDelete(id) {
        console.log(id);
        this.props.deleteFriendRequest(this.props.user.token, id)
            .then(() => this.props.getFriendRequests(this.props.user.token))
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
        getFriendRequests, deleteFriendRequest
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsRequestScreen)