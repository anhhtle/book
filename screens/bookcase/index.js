import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './currentReadingSection';
import MyBooksSection from './myBooksSection';
import RecommendedBookSection from './recommendedBooksSection';
import AvatarsSection from './avatarsSection';

export default class BookcaseScreen extends React.Component {
    
    render () {
        return (
            <ScrollView style={styles.container}>

                <MainHeader navigation={this.props.navigation} />

                <CurrentReadingSection />
                <MyBooksSection />
                <RecommendedBookSection />
                <AvatarsSection />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
