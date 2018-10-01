import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { AppLoading, Font } from 'expo';

import Ionicons from './node_modules/@expo/vector-icons/fonts/Ionicons.ttf';

//import screens
import DashboardScreen from './screens/DashboardScreen';

const RootStack = createStackNavigator(
  {
    Dashboard: { screen: DashboardScreen }
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
      <View style={styles.container}>
        <RootStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});