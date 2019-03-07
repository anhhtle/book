import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './redux/reducers/combineReducers';

const store = createStore(combineReducers, applyMiddleware(thunk));

//***********  import screens ********************
import SignInScreen from './screens/sign-in';
import DashboardScreen from './screens/DashboardScreen';
import BookSearchResultScreen from './screens/search/bookSearchResult';
import ShareBooksScreen from './screens/share';
import CommunityRequestsScreen from './screens/requests/communityRequests';
import MyRequestsScreen from './screens/requests/myRequests';

// friend screens
import FriendProfileScreen from './screens/friend';
import FriendBooksDetailedScreen from './screens/friend/friendBooksSection/detailedScreen';
import FriendWatchlistBooksDetailedScreen from './screens/friend/watchlistBooksSection/detailedScreen';

// setting screens
import SettingScreen from './screens/settings';
import EditProfileScreen from './screens/settings/profile';
import NotificationSettingsScreen from './screens/settings/notifications';
import UserGuideScreen from './screens/settings/userGuide';
import GlobalFont from 'react-native-global-font';

Text.defaultProps.style = { color: '#000' };

const RootStack = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },

    Dashboard: { screen: DashboardScreen },
    BookSearchResult: { screen: BookSearchResultScreen },
    
    // share books section
    ShareBooksScreen: { screen: ShareBooksScreen },

    // setting section
    Setting: { screen: SettingScreen },
    EditProfile: { screen: EditProfileScreen },
    NotificationSettings: { screen: NotificationSettingsScreen },
    UserGuide: { screen: UserGuideScreen },

    // manage requests
    CommunityRequests: { screen: CommunityRequestsScreen },
    MyRequests: { screen: MyRequestsScreen },

    // friend profile
    FriendProfile: { screen: FriendProfileScreen },
    FriendBooks: { screen: FriendBooksDetailedScreen },
    FriendWatchlist: { screen: FriendWatchlistBooksDetailedScreen },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none'
  }
);

export default class App extends React.Component {

  componentDidMount() {
    let fontName = 'Roboto'
    GlobalFont.applyGlobal(fontName)
  }


  render() {

    return (
      <Provider store={ store } >
        <SafeAreaView style={styles.container}>
          <RootStack />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});