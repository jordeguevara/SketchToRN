import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Typography} from '../../styles';
const GameResult = props => {
  const background = {
    backgroundColor:
      props.result === 'win' ? Colors.GoldenColor : Colors.GrayColor,
  };
  return (
    <View style={styles.container}>
      <View style={[styles.gameMapContainer, background]}>
        <Text style={styles.gameMap_text}>
          {props.result === 'win' ? 'W' : 'L'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'flex-end',
  },
  gameMapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  gameMap_text: {
    fontFamily: Typography.FontFamily,
    fontSize: 24,
    color: Colors.TextTitleColor,
    fontWeight: Typography.Bold,
  },
});

export default GameResult;
