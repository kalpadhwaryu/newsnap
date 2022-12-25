import React, {FunctionComponent} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import data from '../data/data';
import SingleNews from './SingleNews';

const Main: FunctionComponent = () => {
  return (
    <FlatList
      style={styles.allNews}
      data={data}
      renderItem={({item}) => <SingleNews item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  allNews: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default Main;
