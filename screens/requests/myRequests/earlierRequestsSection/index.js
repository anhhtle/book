import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

// components
import EarlierRequestCard from './EarlierRequestCard';


class EarlierRequestsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Earlier</Text>
                </View>

                {this.renderRequests()}
            </View>
        )
    }

    renderRequests() {
        let arr = [];
        this.props.requests.map((request) => {
            if (request.requester._id === this.props.user._id && (request.status === 'Recieved' || request.status === 'Cancelled')) {
                arr.push(<EarlierRequestCard key={request._id} request={request} />);
            }
        })
        return arr;
    }
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10, 
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
});

const mapStateToProps = (state) => {
    const { requests, user } = state;
    return { requests, user }
}

export default connect(mapStateToProps)(EarlierRequestsSection);