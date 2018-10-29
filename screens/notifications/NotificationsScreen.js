import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import MainHeader from '../MainHeader';
import RecommendationCard from './RecommendationCard';


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
        let arr = [];
        this.props.notifications.map((notification, index) => {
            if(notification.type === 'Recommendation') {
                arr.push(<RecommendationCard key={index} friend={notification.friend} book={notification.book} date={notification.date} navigation={this.props.navigation}/>)
            } else if (notification.type === 'Medal') {
                arr.push(<Text key={index}>New medal</Text>)
            } else if (notification.type === 'New friend') {
                arr.push(<Text key={index}>New friend</Text>)
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