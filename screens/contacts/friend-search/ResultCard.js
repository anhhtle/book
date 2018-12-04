import React from 'React';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.friend
        };
    }

    render () {
        const friend = this.state.friend

        return (
            <View style={styles.container}>
                <Image source={{ uri: friend.avatar.image }} style={styles.cardImage} />

                <View style={styles.cardDetail}>
                    <View>
                        <Text style={styles.name}>{friend.first_name + ' ' + friend.last_name}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.renderAlias()}{this.renderJob()}</Text>
                    </View>

                    {/* action button */}
                    {this.renderActionButton()}
                </View>
            </View>
        )
    }

    renderAlias() {
        if (this.state.friend.alias) {
            return <Text style={styles.alias}>{this.state.friend.alias}</Text>
        }
    }
    renderJob() {
        let str = ''
        if (this.state.friend.alias && this.state.friend.job) {
            str += ', '
        }
        if (this.state.friend.job) {
            str += this.state.friend.job
        }
        return <Text>{str}</Text>
    }
    renderActionButton() {
        let res = (
            <TouchableOpacity style={styles.actionIconContainer}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'} style={styles.actionIcon}/>
                <Text style={{color: '#fff'}}>Add Friend</Text>
            </TouchableOpacity>
        );

        this.props.user.friends.map((friend) => {
            if (friend === this.state.friend._id) {
                res = (
                    <View style={styles.friendedContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} style={styles.friendedIcon}/>
                        <Text>Friend</Text>
                    </View>
                );
                return;
            }
        })

        this.props.friendRequests.map(request => {
            if(request.requester._id === this.state.friend._id || request.requestee._id === this.state.friend._id) {
                res = (
                    <View style={styles.friendedContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} style={styles.friendedIcon}/>
                        <Text>Requested</Text>
                    </View>
                );
                return;
            }
        });

        return res;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({friend: nextProps});
    }

}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        maxHeight: 140,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5
    },
    cardImage: {
        flex: 1,
        width: 100,
        resizeMode: 'contain',
        marginRight: 15
    },
    cardDetail: {
        flex: 4,
        paddingVertical: 7,
        justifyContent: 'space-between'
    },
    name: {
        marginBottom: 3,
    },
    alias: {
        marginBottom: 10,
        color: '#8c1515'
    },
    actionIconContainer: {
        width: 120,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#8c1515',
        borderRadius: 5
    },
    actionIcon: {
        fontSize: 24,
        marginRight: 8,
        color: '#fff'
    },
    friendedContainer: {
        width: 110,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 5
    },
    friendedIcon: {
        fontSize: 24,
        marginRight: 8,
        color: '#000'
    },
})

const mapStateToProps = (state) => {
    const { user, friendRequests } = state;
    return { user, friendRequests }
}

export default connect(mapStateToProps)(ResultCard)