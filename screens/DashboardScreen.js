import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// icon for android production build
import Ionicons from 'react-native-vector-icons/Ionicons';

// icon for dev in expo
// import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './home/HomeScreen';

class ContactsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Contacts!</Text>
            </View>
        );
    }
}

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
        navigationOptions: ({ navigation }) => ({
            // icons
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                
                // if (routeName === 'Home') {
                //     iconName = `ios-home${focused ? '' : '-outline'}`;

                // } else if (routeName === 'Contacts') {
                //     iconName = `ios-people${focused ? '' : '-outline'}`;
                    
                // } else if (routeName === 'MyBooks') {
                //     iconName = `ios-book${focused ? '' : '-outline'}`;

                // } else if (routeName === 'Notifications') {
                //     iconName = `ios-notifications${focused ? '' : '-outline'}`;
                // }

                if (Platform.OS === 'ios') {
                    iconName = 'ios-';
                } else {
                    iconName = 'md-';
                }
                
                // if (routeName === 'Home') {
                //     iconName += `home${focused ? '' : '-outline'}`;

                // } else if (routeName === 'Contacts') {
                //     iconName += `people${focused ? '' : '-outline'}`;
                    
                // } else if (routeName === 'MyBooks') {
                //     iconName += `book${focused ? '' : '-outline'}`;

                // } else if (routeName === 'Notifications') {
                //     iconName += `notifications${focused ? '' : '-outline'}`;
                // }
                
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
    