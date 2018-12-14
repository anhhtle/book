import React from 'react';
import { ScrollView, Text, StyleSheet, } from 'react-native';

// redux
import { connect } from 'react-redux';

import ContactsHeader from '../ContactsHeader';
import ContactsSubheader from '../ContactsSubheader';
import FriendCard from './FriendCard';

class FriendsListScreen extends React.Component {

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
            arr.push(<FriendCard friend={friend} key={friend._id}/>)
        });
        return arr;
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

export default connect(mapStateToProps)(FriendsListScreen)