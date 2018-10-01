import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './home/HomeScreen';
import ContactsScreen from './contacts/ContactsScreen';

class MyBooksScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Books!</Text>
            </View>
        );
    }
}

class NotificationsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications Screen!</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator (
    {
        Home: HomeScreen,
        Contacts: ContactsScreen,
        MyBooks: { 
            screen: MyBooksScreen, 
            navigationOptions: { title: 'My Books' },
        },
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: { title: 'Notifications' }
        },
    },
    {
        initialRouteName: 'Contacts',
        navigationOptions: ({ navigation }) => ({      
            // icons
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
            
                // determine OS
                if (Platform.OS === 'ios') {
                    iconName = 'ios-';
                } else {
                    iconName = 'md-';
                }
                
                // Asign icon
                if (routeName === 'Home') {
                    iconName += `home`;

                } else if (routeName === 'Contacts') {
                    iconName += `people`;
                    
                } else if (routeName === 'MyBooks') {
                    iconName += `book`;

                } else if (routeName === 'Notifications') {
                    iconName += `notifications`;
                }
        
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
    },
);
    