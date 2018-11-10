import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import FriendNewBookCard from './FriendNewBookCard';
import FriendCurrentReadingCard from './FriendCurrentReadingCard';
import FriendSharingBookCard from './FriendSharingBookCard';
import FriendRecievedBookCard from './FriendRecievedBookCard';
import FriendNewBookmarCard from './FriendNewBookmarCard';


class NewsfeedSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNewsfeeds()}
            </View>
        );
    }

    renderNewsfeeds() {
        let arr = [];
        this.props.newsfeeds.map((newsfeed, index) => {
            if (newsfeed.type === 'Friend: new book') {
                arr.push(<FriendNewBookCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} />)
            } else if (newsfeed.type === 'Friend: reading') {
                arr.push(<FriendCurrentReadingCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} />)
            } else if (newsfeed.type === 'Friend: sharing book') {
                arr.push(<FriendSharingBookCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} />)
            } else if (newsfeed.type === 'Friend: received book') {
                arr.push(<FriendRecievedBookCard key={index} friend={newsfeed.friend} community_member={newsfeed.community_member} book={newsfeed.book} date={newsfeed.date} />)
            } else if (newsfeed.type === 'Friend: bookmark') {
                arr.push(<FriendNewBookmarCard key={index} friend={newsfeed.friend} bookmark={newsfeed.bookmark} date={newsfeed.date} />)
            }
        });

        return arr;
    }
}

const styles = StyleSheet.create({

    container: {
    },
    newsCard: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },

    // card heading
    cardHeading: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 8,
    },
    nameDateContainer: {
        flex: 4,
        justifyContent: 'space-around'
    },
    profileName: {
        fontWeight: 'bold'
    },
    date: {
        color: 'grey',
        fontSize: 12,
    },

    // card content
    cardContent: {
        flexDirection: 'row'
    },
    bookImage: {
        flex: 1,
        height: 70,
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'lightgrey',
        marginRight: 10
    },
    bookTextContainer: {
        flex: 4
    },
    bookTitle: {
        marginBottom: 2
    },
    author: {
        fontWeight: 'bold',
        marginBottom: 2
    }

});

const mapStateToProps = (state) => {
    const { newsfeeds } = state;
    return { newsfeeds };
}

export default connect(mapStateToProps)(NewsfeedSection);