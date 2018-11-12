import React, { Component } from 'react';
import {Text, View, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

import AvatarCard from './AvatarCard';

class AvatarsSection extends Component {
    constructor (props) {
        super (props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Avatars unlocked ({this.props.avatars.length}/10)</Text>

                    <Text style={styles.browseLink}>Browse all...</Text>
                </View>

                {this.renderAvatars()}
                
            </View>
        );
    }

    renderAvatars() {
        let arr = [];
        this.props.avatars.map((avatar, index) => {
            arr.push(<AvatarCard key={avatar._id} avatar={avatar} />)
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
    const { avatars } = state
    return { avatars }
};
  
export default connect(mapStateToProps)(AvatarsSection);