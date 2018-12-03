import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAvatars } from 'book/redux/actions/avatar';

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
                <NotificationsSection navigation={props.navigation}/>
                <NewsfeedSection />
    
            </ScrollView>
        );
    }

    componentDidMount() {
        if (this.props.appState.env === 'production') {
            this.props.getAvatars(this.props.user.token);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    const { appState, user, avatars } = state;
    return { appState, user, avatars }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getAvatars,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)