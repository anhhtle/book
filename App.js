import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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
  render() {
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
