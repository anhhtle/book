import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './redux/reducers/combineReducers';

const store = createStore(combineReducers);

// need to comment out all expo related lines on production build
import { AppLoading, Font } from 'expo';

import Ionicons from './node_modules/@expo/vector-icons/fonts/Ionicons.ttf';

//import screens
import DashboardScreen from './screens/DashboardScreen';
import BookSearchResultScreen from './screens/search/bookSearchResult';
import ShareBooksScreen from './screens/share';
import SettingScreen from './screens/settings';
import EditProfileScreen from './screens/settings/profile';



const RootStack = createStackNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    BookSearchResult: { screen: BookSearchResultScreen },
    
    // share books section
    ShareBooksScreen: { screen: ShareBooksScreen },

    // setting section
    Setting: { screen: SettingScreen },
    EditProfile: { screen: EditProfileScreen }
  },
  {
    initialRouteName: 'Dashboard',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        Ionicons
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  render() {

    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Provider store={ store } >
        <View style={styles.container}>
          <RootStack />
        </View>
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