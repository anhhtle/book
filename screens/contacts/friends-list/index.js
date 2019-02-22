import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteFriend } from 'thebooksjourney/redux/actions/user';
import { getVariantsFriend } from 'thebooksjourney/redux/actions/variantFriend';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendCard from './FriendCard';

class FriendsListScreen extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleFriendProfile = this.handleFriendProfile.bind(this);
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
        this.props.user.friends.map((friend, index) => {
            arr.push(
                <FriendCard friend={friend} key={friend._id} 
                    delete={() => this.handleDelete(friend._id, index)}
                    friend_profile={() => this.handleFriendProfile(friend._id, friend)}
            />)
        });
        return arr;
    }
    handleDelete(friend_id, index) {
        this.props.deleteFriend(this.props.user.token, {friend_id}, index);
    }
    handleFriendProfile(id, friend) {
        this.props.getVariantsFriend(this.props.user.token, id)
            .then(() => {
                this.props.navigation.navigate('FriendProfile', {destination: 'FriendsList', friend});
            })
            .catch(err => console.error(err));
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
        deleteFriend,
        getVariantsFriend
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListScreen)