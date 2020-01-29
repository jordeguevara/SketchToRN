import React from 'react';
import {Platform, StatusBar} from 'react-native';
import AppNavigator from './navigation/index';

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <AppNavigator />
      </>
    );
  }
}
