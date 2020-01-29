import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MatchStatistic} from '../MatchStatistic';
import {Colors} from '../../styles';

class CellBody extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {stats} = this.props;
    const {kills = 0.0, deaths = 0.0, accuracy = 0.0} = stats;
    const matchStatisticInfo = [
      {
        key: '1',
        title: 'Kills',
        value: kills,
      },
      {
        key: '2',
        title: 'Deaths',
        value: deaths,
      },
      {
        key: '3',
        title: 'Accuracy',
        value: accuracy,
      },
    ];
    return (
      <View style={styles.container}>
        {matchStatisticInfo.map(element => (
          <MatchStatistic
            key={element.key}
            title={element.title}
            result={element.value}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: Colors.CellBodyColor,
  },
});

export default CellBody;
