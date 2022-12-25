import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Explore: FunctionComponent = () => {
  return (
    <View style={styles.exploreView}>
      <Text style={styles.exploreText}>Explore</Text>
      <View style={styles.exploreInternalView}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.touchableText}>National</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.touchableText}>International</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.touchableText}>Politics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreView: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  exploreText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
    paddingBottom: 10,
    fontFamily: 'fantasy',
  },
  exploreInternalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchable: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    borderWidth: 0.5,
  },
  touchableText: {
    color: 'black',
    fontFamily: 'fantasy',
  },
});

export default Explore;
