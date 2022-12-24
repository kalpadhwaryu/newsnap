import React, {FunctionComponent, type PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FunctionComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Newsnap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    width: '100%',
  },
  text: {
    fontFamily: 'fantasy',
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
  },
});

export default Header;
