import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NotificationsSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            yourRequestsCount: 0,
            communityRequestsCount: 0,
        }
    }

    render() {
        const props = this.props;
        
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.notificationSubsection} onPress={() => props.navigation.navigate('CommunityRequests')}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-paper-plane' : 'md-paper-plane'} style={styles.notificationIcon} />
                    <Text style={{flex: 1}}>You have <Text style={{color: '#8c1515', fontWeight: 'bold'}}>{this.state.communityRequestsCount}</Text> share book requests</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.notificationSubsection} onPress={() => props.navigation.navigate('MyRequests')}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} style={styles.notificationIcon} />
                    <Text style={{flex: 1}}>You requested <Text style={{color: '#8c1515', fontWeight: 'bold'}}>{this.state.yourRequestsCount}</Text> book</Text>
                </TouchableOpacity>
            </View>
        );
    }
    determineRequestsCount(requests) {
        let yourCount = 0;
        let communityCount = 0;
        requests.requests.map(request => {
            if(request.original_owner._id === this.props.user_id) {
                if (request.status === 'Requesting' || request.status === 'Accepted') {
                    ++communityCount;
                }
            } else {
                if (request.status === 'Requesting' || (request.status === 'Accepted' && !request.hide_request) || request.status === 'Sent') {
                    ++yourCount;
                }
            }
        })
        this.setState({yourRequestsCount: yourCount, communityRequestsCount: communityCount});
    }
    componentWillReceiveProps(nextProps) {
        this.determineRequestsCount(nextProps.requests);
    }
    mounted() {
        this.determineRequestsCount(this.props.request);
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
    },
    notificationSubsection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    notificationIcon: {
        fontSize: 20,
        color: '#8c1515',
        marginRight: 10
    }

});
