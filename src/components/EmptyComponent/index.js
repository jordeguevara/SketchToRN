import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
  },
});

export const EmptyComponent = (
  <View style={styles.container}>
    <Text style={{color: Colors.TextTitleColor}}>No Match information yet</Text>
  </View>
);
