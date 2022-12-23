import React, {FunctionComponent, type PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: FunctionComponent = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello. This is Kalp Adhwaryu.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
