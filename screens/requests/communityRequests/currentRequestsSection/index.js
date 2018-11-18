import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

// components
import CurrentRequestCard from './CurrentRequestCard';


class CurrentRequestsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Current Requests</Text>
                </View>

                {this.renderRequests()}
            </View>
        )
    }

    renderRequests() {
        let arr = [];
        this.props.requests.map((request) => {
            if (request.owner._id === this.props.user._id && (request.status === 'Requesting' || request.status === 'Accepted')) {
                arr.push(<CurrentRequestCard key={request._id} request={request} />);
            }
        })
        if (arr.length > 0) {
            return arr;
        } else {
            return (
                <View style={styles.noRequestContainer}>
                    <Text>No request</Text>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    headerTitle: {
        fontWeight: 'bold'
    },
    noRequestContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});

const mapStateToProps = (state) => {
    const { requests, user } = state;
    return { requests, user }
}

export default connect(mapStateToProps)(CurrentRequestsSection);