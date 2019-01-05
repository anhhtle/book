import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './currentReadingSection';
import MyBooksSection from './myBooksSection';
import RecommendedBookSection from './recommendedBooksSection';
import WatchlistBooksSection from './watchlistBooksSection';
import AvatarsSection from './avatarsSection';

export default class BookcaseScreen extends React.Component {
    
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
