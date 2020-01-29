import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Oops, something went wrong!</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    fontWeight: '500',
    padding: 5,
    color: '#000',
  },
});
