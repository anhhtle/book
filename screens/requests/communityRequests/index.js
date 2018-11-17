import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

// components
import GoBackHeader from 'book/screens/utility/GoBackHeader';

class CommunityRequestsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render () {
        return (
            <ScrollView style={styles.container}>
                <GoBackHeader title={"Community's Requests"} navigation={this.props.navigation} />

                {this.renderRequests()}
            </ScrollView>
        )
    }

    renderRequests() {
        let arr = [];
        this.props.requests.map((request, index) => {
            arr.push(<Text>{request.status}</Text>);
        })
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    const { requests, user } = state;
    return { requests, user }
}

export default connect(mapStateToProps)(CommunityRequestsScreen);