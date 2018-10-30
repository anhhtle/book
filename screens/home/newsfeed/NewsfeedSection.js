import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import FriendNewBookCard from './FriendNewBookCard';

class NewsfeedSection extends Component {
    constructor(props) {
        super(props);
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