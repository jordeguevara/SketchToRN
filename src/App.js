import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './navigation';

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
