import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

import BookmarkCard from './BookmarkCard';

class BookmarksSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Bookmarks unlocked ({this.props.bookmarks.length}/10)</Text>

                    <Text style={styles.browseLink}>Browse all...</Text>
                </View>

                {this.renderBookmarks()}
                
            </View>
        );
    }

    renderBookmarks() {
        let arr = [];
        this.props.bookmarks.map((bookmark, index) => {
            arr.push(<BookmarkCard key={index} bookmark={bookmark} />)
        })

        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        backgroundColor: '#8c1515',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    browseLink: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

const mapStateToProps = (state) => {
    const { bookmarks } = state
    return { bookmarks }
};
  
export default connect(mapStateToProps)(BookmarksSection);