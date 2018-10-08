import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// redux
import { connect } from 'react-redux';

// components
import MainHeader from '../MainHeader';
import CurrentReadingSection from './CurrentReadingSection';
import MyBooksSection from './MyBooksSection';

class BookcaseScreen extends React.Component {
    
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
        flex: 1
    }
});

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
  };
  
export default connect(mapStateToProps)(BookcaseScreen);