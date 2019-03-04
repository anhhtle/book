import React from 'React';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createFriendRequest } from 'thebooksjourney/redux//actions/friend';

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
            <TouchableOpacity style={styles.actionIconContainer} onPress={() => this.handleCreateFriendRequest()}>
                <Ionicons name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'} style={styles.actionIcon}/>
                <Text style={{color: '#fff'}}>Add Friend</Text>
            </TouchableOpacity>
        );

        this.props.user.friends.map((friend) => {
            if (friend._id === this.state.friend._id) {
                res = (
                    <View style={styles.friendedContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} style={styles.friendedIcon}/>
                        <Text style={{color: 'blue'}}>Friend</Text>
                    </View>
                );
                return;
            }
        })

        this.props.friendRequests.friend_requests.map(request => {
            if(request.requester._id === this.state.friend._id || request.requestee._id === this.state.friend._id) {
                res = (
                    <View style={styles.requestedContainer}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} style={styles.requestedIcon}/>
                        <Text>Request pending</Text>
                    </View>
                );
                return;
            }
        });

        return res;
    }
    handleCreateFriendRequest() {
        this.props.createFriendRequest(this.props.user.token, this.state.friend._id)
            .then(() => {
            })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({friend: nextProps.friend});
    }

    mounted() {
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
    requestedContainer: {
        width: 110,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 5
    },
    requestedIcon: {
        fontSize: 24,
        marginRight: 8,
    },
    friendedContainer: {
        width: 110,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'lightgrey',
        borderRadius: 5
    },
    friendedIcon: {
        fontSize: 24,
        marginRight: 8,
        color: 'blue'
    },
})

const mapStateToProps = (state) => {
    const { user, friendRequests } = state;
    return { user, friendRequests }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        createFriendRequest,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard)