import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';
import data from '../data/data';
import SingleNews from './SingleNews';
import tw from 'tailwind-react-native-classnames';

const Main: FunctionComponent = () => {
  return (
    <FlatList
      style={[tw`px-3 py-1`]}
      data={data}
      renderItem={({item}) => <SingleNews item={item} />}
    />
  );
};

export default Main;
