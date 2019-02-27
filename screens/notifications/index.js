import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { seenNotifications } from 'thebooksjourney/redux/actions/notification';

// components
import MainHeader from '../MainHeader';
import RecommendationCard from './RecommendationCard';
import AvatarCard from './AvatarCard';
import NewFriendCard from './NewFriendCard';
import FriendRequestCard from './FriendRequestCard';
import RequestShareCard from './RequestShareCard';
import RequestAcceptedCard from './RequestAcceptedCard';
import RequestSentCard from './RequestSentCard';
import RequestCancelledCard from './RequestCancelledCard';


class NotificationsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader navigation={this.props.navigation}/>

                {this.renderNotificationCards()}
            </View>
        );
    }
    componentDidMount() {
        for (let notification of this.props.notifications.notifications) {            
            if (notification.new) {
                this.props.seenNotifications(this.props.user.token);
                break;
            }
        }
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
                arr.push(<RecommendationCard key={index} friend={notification.friend} book={notification.book} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Avatar') {
                arr.push(<AvatarCard key={index} avatar={notification.avatar} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'New friend') {
                arr.push(<NewFriendCard key={index} friend={notification.friend} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Friend request') {
                arr.push(<FriendRequestCard key={index} friend={notification.friend} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Request: accepted') {
                arr.push(<RequestAcceptedCard key={index} book={notification.book} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Request: cancelled') {
                arr.push(<RequestCancelledCard key={index} book={notification.book} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Request: share book') {
                arr.push(<RequestShareCard key={index} book={notification.book} date={notification.createdAt} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Request: sent') {
                arr.push(<RequestSentCard key={index} book={notification.book} date={notification.createdAt} navigation={this.props.navigation}/>)
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
    const { user, notifications } = state
    return { user, notifications }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        seenNotifications
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);