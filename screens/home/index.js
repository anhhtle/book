import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from 'book/redux/actions/user';
import { getAvatars } from 'book/redux/actions/avatar';
import { getNewsfeeds } from 'book/redux/actions/newsfeed';
import { getBookRequests } from 'book/redux/actions/request';
import { getFriendRequests } from 'book/redux/actions/friend';
import { getVariantsShare } from 'book/redux/actions/variantShare';
import { getNotifications } from 'book/redux/actions/notification';
import { getVariants } from 'book/redux/actions/variant';

// component
import MainHeader from '../MainHeader';
import BooksAvailableSection from './booksAvailable';
import NotificationsSection from './notifications';
import NewsfeedSection from './newsfeed/NewsfeedSection';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.load = this.load.bind(this);
    }

    render() {
        const props = this.props;

        return (
            <ScrollView style={styles.container} screenProps={{count: 1}}>
                <MainHeader navigation={props.navigation} />
    
                <BooksAvailableSection navigation={props.navigation}/>
                <NotificationsSection navigation={props.navigation} requests={this.props.requests} user_id={this.props.user._id} />
                <NewsfeedSection />
    
            </ScrollView>
        );
    }

    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load);

        if (this.props.appState.env === 'dev') {
            this.props.getCurrentUser(this.props.user.token);
        }

        this.props.getAvatars(this.props.user.token);
        this.props.getVariantsShare(this.props.user.token, {page: 1});
        this.props.getVariants(this.props.user.token);
    }
    load() {
        this.props.getNewsfeeds(this.props.user.token);
        this.props.getFriendRequests(this.props.user.token);
        this.props.getBookRequests(this.props.user.token);
        this.props.getNotifications(this.props.user.token);
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
        getCurrentUser, getVariants,
        getAvatars, getNewsfeeds, getBookRequests, getVariantsShare,
        getFriendRequests, getNotifications
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)