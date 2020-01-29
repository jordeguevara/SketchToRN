import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GameResult from '../GameResult';
import {Colors, Typography} from '../../styles';

class CellHeader extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {name = '', type = '', result = ''} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.gameMap_text}>{name.toUpperCase()}</Text>
          <Text style={styles.gameType_text}>{type.toUpperCase()}</Text>
        </View>
        <GameResult result={result} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: Colors.CellHeaderColor,
  },
  subContainer: {
    width: '75%',
    padding: 15,
  },
  gameMap_text: {
    fontFamily: Typography.FontFamily,
    fontSize: 22,
    color: Colors.TextTitleColor,
    fontWeight: Typography.Bold,
  },
  gameType_text: {
    marginVertical: 1,
    fontSize: 18,
    fontWeight: Typography.Bold,
    color: Colors.GoldenColor,
    fontFamily: Typography.FontFamily,
  },
});

export default CellHeader;
