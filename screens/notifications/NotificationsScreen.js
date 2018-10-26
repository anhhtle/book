import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// components
import MainHeader from '../MainHeader'


export default class NotificationsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader navigation={this.props.navigation}/>

                <Text>Notifications Screen!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});