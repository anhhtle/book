import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';

class IconBadgeContacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Ionicons name={this.props.name} size={25} color={this.props.color} />
                {this.renderCount()}
            </View>
        );
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
}

const styles = StyleSheet.create({
    container: {
    },
    countContainer: {
        position:'absolute',
        top: -10,
        right: -15,
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0000',
    }
});

const mapStateToProps = (state) => {
    const { user, friendRequests } = state;
    return { user, friendRequests }
}

export default connect(mapStateToProps)(IconBadgeContacts)