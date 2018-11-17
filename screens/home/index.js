import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

import MainHeader from '../MainHeader';
import BooksAvailableSection from './booksAvailable';
import NotificationsSection from './notifications';
import NewsfeedSection from './newsfeed/NewsfeedSection';

export default HomeScreen = (props) => {
    return (
        <ScrollView style={styles.container}>
            <MainHeader navigation={props.navigation} />

            <BooksAvailableSection navigation={props.navigation}/>
            <NotificationsSection navigation={props.navigation}/>
            <NewsfeedSection />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});