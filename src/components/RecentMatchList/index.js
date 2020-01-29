import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ErrorBoundary from '../../components/ErrorBoundary';
import MatchItem from '../../components/MatchItem';
import {EmptyComponent} from '../EmptyComponent';
import {Colors} from '../../styles';
export const RecentMatchList = ({matchData}) => {
  return (
    <ErrorBoundary>
      <FlatList
        data={matchData}
        style={styles.container}
        ListEmptyComponent={EmptyComponent}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <MatchItem data={item} />}
        contentContainerStyle={styles.flatListStyle}
      />
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.PrimaryColor},
  flatListStyle: {
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
  },
});
