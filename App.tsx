import React, {FunctionComponent, type PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Explore from './components/Explore';
import Header from './components/Header';
import Main from './components/Main';

const App: FunctionComponent = () => {
  return (
    <View style={styles.view}>
      <Header />
      <Explore />
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default App;
