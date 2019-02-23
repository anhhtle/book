import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './currentReadingSection';
import MyBooksSection from './myBooksSection';
import RecommendedBookSection from './recommendedBooksSection';
import WatchlistBooksSection from './watchlistBooksSection';
import AvatarsSection from './avatarsSection';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVariants } from 'thebooksjourney/redux/actions/variant';

class BookcaseScreen extends React.Component {
    constructor(props) {
        super(props);

        this.load = this.load.bind(this);
    }

    componentDidMount() {
        this.load()
        this.props.navigation.addListener('willFocus', this.load);
    }
    load() {
        this.props.getVariants(this.props.user.token);
    }
    
    render () {
        return (
            <ScrollView style={styles.container}>

                <MainHeader navigation={this.props.navigation} />

                <CurrentReadingSection />
                <MyBooksSection navigation={this.props.navigation} />
                <RecommendedBookSection navigation={this.props.navigation} />
                <WatchlistBooksSection navigation={this.props.navigation} />
                <AvatarsSection navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    const { user, variants } = state
    return { user, variants }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getVariants,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BookcaseScreen);
