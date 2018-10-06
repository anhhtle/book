import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/HomeScreen';
// contacts stack
import FriendsListScreen from './contacts/friends-list/FriendsListScreen';
import FriendsRequestScreen from './contacts/friends-request/FriendsRequestScreen';

import BookcaseScreen from './bookcase/BookcaseScreen';

class NotificationsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications Screen!</Text>
            </View>
        );
    }
}

const ContactsStack = createStackNavigator(
    {
        FriendsList: {screen: FriendsListScreen},
        FriendsRequest: {screen: FriendsRequestScreen}
    },
    {
        headerMode: 'none'
    }
)

export default createBottomTabNavigator (
    {
        Home: HomeScreen,
        Contacts: ContactsStack,
        Bookcase: BookcaseScreen,
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: { title: 'Notifications' }
        },

        // screen in dev
        // FriendsRequest: {screen: FriendsRequestScreen}
    },
    {
        initialRouteName: 'Bookcase',
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
                    
                } else if (routeName === 'Bookcase') {
                    iconName += `book`;

                } else if (routeName === 'Notifications') {
                    iconName += `notifications`;
                } 

                // for dev.. can be deleted in prod
                else {
                    iconName += 'alarm';
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
    