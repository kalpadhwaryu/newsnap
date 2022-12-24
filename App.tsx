import React, {FunctionComponent, type PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Explore from './components/Explore';
import Header from './components/Header';

const App: FunctionComponent = () => {
  return (
    <View style={styles.view}>
      <Header />
      <Explore />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default App;
