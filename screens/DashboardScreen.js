import React from 'react';
import { Text, View, componentDidMount } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';

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

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
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
        Settings: SettingsScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            // icons
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;

                } else if (routeName === 'Contacts') {
                    iconName = `ios-people${focused ? '' : '-outline'}`;
                    
                } else if (routeName === 'MyBooks') {
                    iconName = `ios-book${focused ? '' : '-outline'}`;

                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
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
    