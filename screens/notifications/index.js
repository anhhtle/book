import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import MainHeader from '../MainHeader';
import RecommendationCard from './RecommendationCard';
import AvatarCard from './AvatarCard';
import NewFriendCard from './NewFriendCard';
import FriendRequestCard from './FriendRequestCard';


class NotificationsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader navigation={this.props.navigation}/>

                {this.renderNotificationCards()}
            </View>
        );
    }

    renderNotificationCards() {
        // if no notification
        if (this.props.notifications.notifications.length === 0) {
            return (
                <Text style={{marginTop: 20, textAlign: 'center'}}>No notification at this time</Text>
            )
        }

        let arr = [];
        this.props.notifications.notifications.map((notification, index) => {
            if(notification.type === 'Recommendation') {
                arr.push(<RecommendationCard key={index} friend={notification.friend} book={notification.book} date={notification.date} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Avatar') {
                arr.push(<AvatarCard key={index} avatar={notification.avatar} date={notification.date} navigation={this.props.navigation}/>)
            } else if (notification.type === 'New friend') {
                arr.push(<NewFriendCard key={index} friend={notification.friend} date={notification.date} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Friend request') {
                arr.push(<FriendRequestCard key={index} friend={notification.friend} date={notification.date} navigation={this.props.navigation}/>)
            }
        });
        return arr;

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    const { notifications } = state
    return { notifications }
};

export default connect(mapStateToProps)(NotificationsScreen);