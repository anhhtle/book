import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/index';

// contacts stack
import FriendsListScreen from './contacts/friends-list';
import FriendsRequestScreen from './contacts/friends-request';
import FriendsSearchResultScreen from './contacts/friend-search';

// bookcase stack
import BookcaseScreen from './bookcase';
import MyBooksDetailedScreen from './bookcase/myBooksSection/detailedScreen'
import RecommendedBooksDetailedScreen from './bookcase/recommendedBooksSection/detailedScreen'
import AvatarDetailedScreen from './bookcase/avatarsSection/detailedScreen'

import NotificationsScreen from './notifications';


const ContactsStack = createStackNavigator(
    {
        FriendsList: {screen: FriendsListScreen},
        FriendsRequest: {screen: FriendsRequestScreen},
        FriendsSearchResult: {screen: FriendsSearchResultScreen}
    },
    {
        headerMode: 'none',
        initialRouteName: 'FriendsList'
    }
)

const BookcaseStack = createStackNavigator(
    {
        Bookcase: {screen: BookcaseScreen},
        MyBooks: {screen: MyBooksDetailedScreen},
        RecommendedBooks: {screen: RecommendedBooksDetailedScreen},
        Avatars: {screen: AvatarDetailedScreen}
    },
    {
        headerMode: 'none'
    }
)

export default createBottomTabNavigator (
    {
        Home: HomeScreen,
        Contacts: ContactsStack,
        Bookcase: BookcaseStack,
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: { title: 'Notifications' }
        },
    },
    {
        initialRouteName: 'Home',
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
    