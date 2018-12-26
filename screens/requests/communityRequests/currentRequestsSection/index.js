import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBookRequests, updateBookRequests } from 'thebooksjourney/redux//actions/request';


// components
import CurrentRequestCard from './CurrentRequestCard';


class CurrentRequestsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleAction = this.handleAction.bind(this);
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
        this.props.requests.requests.map((request) => {
            if (request.original_owner._id === this.props.user._id && (request.status === 'Requesting' || request.status === 'Accepted')) {
                arr.push(<CurrentRequestCard key={request._id} request={request} action={this.handleAction}/>);
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
    handleAction(actionObj) {
        this.props.updateBookRequests(this.props.user.token, actionObj)
            .then(() => {
                if(!this.props.requests.error) {
                    this.props.getBookRequests(this.props.user.token)
                }
            })
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getBookRequests,
        updateBookRequests
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRequestsSection);