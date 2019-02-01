import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariantsFriend } from 'thebooksjourney/redux/actions/variantFriend';

// components
import FriendNewBookCard from './FriendNewBookCard';
import FriendCurrentReadingCard from './FriendCurrentReadingCard';
import FriendSharingBookCard from './FriendSharingBookCard';
import FriendRecievedBookCard from './FriendRecievedBookCard';
import FriendNewAvatarCard from './FriendNewAvatarCard';


class NewsfeedSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        }

        this.handleFriendProfile = this.handleFriendProfile.bind(this);
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
        this.props.newsfeeds.newsfeeds.map((newsfeed, index) => {
            if (newsfeed.type === 'Friend: new book') {
                arr.push(<FriendNewBookCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} friend_profile={() => this.handleFriendProfile(newsfeed.friend._id, newsfeed.friend)} />)
            } else if (newsfeed.type === 'Friend: reading') {
                arr.push(<FriendCurrentReadingCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} friend_profile={() => this.handleFriendProfile(newsfeed.friend._id, newsfeed.friend)}/>)
            } else if (newsfeed.type === 'Friend: sharing book') {
                arr.push(<FriendSharingBookCard key={index} friend={newsfeed.friend} book={newsfeed.book} date={newsfeed.date} friend_profile={() => this.handleFriendProfile(newsfeed.friend._id, newsfeed.friend)}/>)
            } else if (newsfeed.type === 'Friend: received book') {
                arr.push(<FriendRecievedBookCard key={index} friend={newsfeed.friend} community_member={newsfeed.community_member} book={newsfeed.book} date={newsfeed.date} friend_profile={() => this.handleFriendProfile(newsfeed.friend._id, newsfeed.friend)}/>)
            } else if (newsfeed.type === 'Friend: avatar') {
                arr.push(<FriendNewAvatarCard key={index} friend={newsfeed.friend} avatar={newsfeed.avatar} date={newsfeed.date} friend_profile={() => this.handleFriendProfile(newsfeed.friend._id, newsfeed.friend)}/>)
            }
        });
        return arr;
    }
    handleFriendProfile(id, friend) {
        this.props.getVariantsFriend(this.props.user.token, id)
            .then(() => {
                this.props.navigation.navigate('FriendProfile', {destination: 'Home', friend});
            })
            .catch(err => console.error(err));
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
    const { newsfeeds, user, variantsFriend } = state;
    return { newsfeeds, user, variantsFriend };
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariantsFriend
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsfeedSection);