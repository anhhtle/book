import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser, deleteFriend } from 'thebooksjourney/redux//actions/user';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendCard from './FriendCard';

class FriendsListScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    render () {
        return (
            <ScrollView style={styles.container} removeClippedSubviews={true}>
                <ContactsHeader navigation={this.props.navigation} />
                <ContactsSubheader navigation={this.props.navigation} />

                {this.renderFriendCards()}
            </ScrollView>
        )
    }
    renderFriendCards() {
        let arr = []
        this.props.user.friends.map(friend => {
            arr.push(<FriendCard friend={friend} key={friend._id} delete={() => this.handleDelete(friend._id)}/>)
        });
        return arr;
    }
    handleDelete(friend_id) {
        this.props.deleteFriend(this.props.user.token, {friend_id})
            .then(() => this.props.getCurrentUser(this.props.user.token));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = (state) => {
    const { user } = state;
    return { user }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser, deleteFriend
    }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(FriendsListScreen)