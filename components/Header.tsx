import React, {FunctionComponent, type PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Header: FunctionComponent = () => {
  return (
    <View style={[tw`px-2 py-1.5 w-full`]}>
      <Text style={[tw`font-mono text-3xl text-black text-center`]}>
        Newsnap
      </Text>
    </View>
  );
};

export default Header;
