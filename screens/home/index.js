import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from 'book/redux/actions/user';
import { getAvatars } from 'book/redux/actions/avatar';
import { getNewsfeeds } from 'book/redux/actions/newsfeed';
import { getBookRequests } from 'book/redux/actions/request';
import { getFriendRequests } from 'book/redux/actions/friend';
import { getVariantsShare } from 'book/redux/actions/variantShare';

// component
import MainHeader from '../MainHeader';
import BooksAvailableSection from './booksAvailable';
import NotificationsSection from './notifications';
import NewsfeedSection from './newsfeed/NewsfeedSection';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props;

        return (
            <ScrollView style={styles.container}>
                <MainHeader navigation={props.navigation} />
    
                <BooksAvailableSection navigation={props.navigation}/>
                <NotificationsSection navigation={props.navigation} requests={this.props.requests} user_id={this.props.user._id} />
                <NewsfeedSection />
    
            </ScrollView>
        );
    }

    componentDidMount() {
        if (this.props.appState.env === 'dev') {
            this.props.getCurrentUser(this.props.user.token);
        }

        this.props.getAvatars(this.props.user.token);
        this.props.getNewsfeeds(this.props.user.token);
        this.props.getFriendRequests(this.props.user.token);
        this.props.getBookRequests(this.props.user.token);
        this.props.getVariantsShare(this.props.user.token, {page: 1});

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    const { appState, user, requests } = state;
    return { appState, user, requests }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getCurrentUser,
        getAvatars, getNewsfeeds, getBookRequests, getVariantsShare,
        getFriendRequests
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)