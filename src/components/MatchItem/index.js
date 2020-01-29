import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import CellHeader from './CellHeader';
import CellBody from './CellBody';

class MatchItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    data: [],
  };
  render() {
    const {data} = this.props;
    const {kills, deaths, accuracy, type, map, result} = data;
    return (
      <View style={styles.container}>
        <CellHeader result={result} type={type} name={map} />
        <CellBody stats={{kills, deaths, accuracy}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: 180,
    width: Dimensions.get('window').width * 0.95,
    backgroundColor: '#191919',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MatchItem;
