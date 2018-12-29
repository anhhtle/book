import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

class ContactsSubheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.navigation.state.routeName
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.subheaderLink} onPress={() => this.props.navigation.navigate('FriendsList')}>
                    <Text style={this.state.activeTab === 'FriendsList' ? styles.subheaderLinkActive : styles.subheaderLinkText}>FRIENDS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subheaderLink} onPress={() => this.props.navigation.navigate('FriendsRequest')}>
                    <Text style={this.state.activeTab === 'FriendsRequest' ? styles.subheaderLinkActive : styles.subheaderLinkText}>REQUESTS</Text>

                    {this.renderCount()}
                </TouchableOpacity>
            </View>
        )
    }

    renderCount() {
        let count = 0;

        this.props.friendRequests.friend_requests.map(request => {
            if(request.requestee._id === this.props.user._id && request.new) {
                count++;
            }
        })

        if (count > 0) {
            return (
                <View style={styles.countContainer}>
                    <Text style={{color: '#fff'}}>{count}</Text>
                </View>
            )
        }
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        marginBottom: 2,
    },
    subheaderLink: {
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subheaderLinkText: {
        color: 'lightgrey',
        fontSize: 16,
    },
    subheaderLinkActive: {
        color: '#8c1515',
        fontSize: 16
    },

    // count icon
    countContainer: {
        position:'absolute',
        top: 3,
        right: 30,
        width: 15,
        height: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000',
    }
});

const mapStateToProps = (state) => {
    const { user, friendRequests } = state;
    return { user, friendRequests }
}

export default connect(mapStateToProps)(ContactsSubheader);