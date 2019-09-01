/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { createAppContainer, createStackNavigator,DrawerNavigator } from 'react-navigation';





const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
    Dashboard: {
      screen: Dashboard,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

// const AppStack = DrawerNavigator({
//   Home: {
//     screen: Login,
//   },
//   Dashboard: {
//     screen: Dashboard,
//   },
// })

const AppContainer = createAppContainer(RootStack);

export default class App extends Component{
  render() {
    return (
       <AppContainer />
    );
  }
}

