import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './CurrentReadingSection';
import MyBooksSection from './MyBooksSection';
import RecommendedBookSection from './RecommendedBookSection';
import BookmarksSection from './BookmarksSection';

export default class BookcaseScreen extends React.Component {
    
    render () {
        return (
            <ScrollView style={styles.container}>

                <MainHeader navigation={this.props.navigation} />

                <CurrentReadingSection />
                <MyBooksSection />
                <RecommendedBookSection />
                <BookmarksSection />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
