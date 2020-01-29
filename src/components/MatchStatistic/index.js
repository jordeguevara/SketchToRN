import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Typography} from '../../styles';

const commonTextStyle = {
  fontFamily: Typography.FontFamily,
  fontSize: 15,
  color: Colors.TextTitleColor,
  fontWeight: '400',
  marginVertical: 5,
};
export const MatchStatistic = props => {
  return (
    <View style={styles.container}>
      <Text style={commonTextStyle}>{props.title.toUpperCase()}</Text>
      <Text style={[commonTextStyle, styles.result_text]}>{props.result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 5,
  },
  result_text: {
    color: Colors.GoldenColor,
    fontSize: 24,
    fontWeight: '300',
  },
});
