import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './CurrentReadingSection';
import MyBooksSection from './MyBooksSection';

export default class BookcaseScreen extends React.Component {
    
    render () {
        return (
            <ScrollView style={styles.container}>

                <MainHeader navigation={this.props.navigation} />

                <CurrentReadingSection />
                <MyBooksSection />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    }
});
