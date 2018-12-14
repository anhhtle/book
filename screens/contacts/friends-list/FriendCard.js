import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FriendCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const props = this.props;

        return (
            <View style={styles.container}>
                <Image resizeMethod="resize" source={{url: props.friend.avatar.image}} style={styles.contactImage} />
    
                <View style={styles.rightSideContainer}>
                    <View>
                        <Text style={styles.contactName}>{props.friend.first_name + ' ' + props.friend.last_name}</Text>
                        <Text style={styles.contactAliasContainer}>{this.renderAlias()}{this.renderJob()}</Text>
                    </View>
    
                    <TouchableOpacity>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'} style={styles.moreIcon} />
                    </TouchableOpacity>
                </View>
    
            </View>
        );
    }
    renderAlias() {
        if (this.props.friend.alias) {
            return (<Text style={styles.contactAlias}>{this.props.friend.alias}</Text>)
        }
    }
    renderJob() {
        if (this.props.friend.alias && this.props.friend.job) {
            return ', ' + this.props.friend.job
        } else if (this.props.friend.job) {
            return this.props.friend.job;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row'
    },
    contactImage: {
        width: 60,
        height: 60,
        marginRight: 10
    },
    rightSideContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    contactName: {
        fontSize: 16,
    },
    contactAliasContainer: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    contactAlias: {
        color: '#8c1515'
    },
    moreIcon: {
        fontSize: 18,
        marginRight: 10
    }
});