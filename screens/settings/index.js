import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, AsyncStorage, Linking, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import GoBackHeader from '../utility/GoBackHeader';

export default class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <GoBackHeader title={'Settings and Privacy'} navigation={this.props.navigation} style={{ marginBottom: 35 }}/>

                <TouchableOpacity style={styles.optionContainer} 
                onPress={() => this.props.navigation.navigate('EditProfile')}
                >
                    <Ionicons style={styles.icon} color={'#4286f4'} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
                    <Text style={styles.option}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}
                onPress={() => this.props.navigation.navigate('NotificationSettings')}
                >
                    <Ionicons style={styles.icon} color={'#ffd472'} name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}/>
                    <Text style={styles.option}>Notification Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer} onPress={() => this.props.navigation.navigate('UserGuide', {destination: 'Setting'} )}>
                    <Ionicons style={styles.icon} color={'#8c1515'} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}/>
                    <Text style={styles.option}>User Guide</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                <TouchableOpacity style={styles.optionContainer} onPress={() => this.handleLogout()}>
                    <Ionicons style={styles.icon} color={'grey'} name={Platform.OS === 'ios' ? 'ios-exit' : 'md-exit'}/>
                    <Text style={styles.option}>Logout</Text>
                </TouchableOpacity>

                <View style={{marginTop: 80, alignItems: 'center'}}>
                    <Text style={styles.contactUs}>Contact us</Text>
                    <TouchableOpacity onPress={this.handleOpenEmail}>
                        <Text style={{fontSize: 16, color: '#4286f4'}}>thebooksjourney@gmail.com</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    handleLogout() {
        AsyncStorage.removeItem('TheBooksJourneyUserToken');
        this.props.navigation.navigate('SignIn');
    }
    handleOpenEmail = async () => {
        try {
            await Linking.openURL('mailto:thebooksjourney@gmail.com');
        } catch (e) {
            console.log({e});
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    optionContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: 30,
        marginRight: 20,
    },
    option: {
        fontSize: 16
    },
    divider: {
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    contactUs: {
        fontSize: 16,
        marginBottom: 10
    },
});