import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Explore: FunctionComponent = () => {
  return (
    <View style={[tw`w-full px-3 py-2`]}>
      <Text style={[tw`text-left text-xl text-black font-mono pb-1.5`]}>
        Explore
      </Text>
      <View style={[tw`flex-row justify-between`]}>
        <TouchableOpacity style={[tw`px-4 py-1 bg-gray-200 rounded-2xl`]}>
          <Text style={[tw`text-black font-mono text-base`]}>National</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`px-4 py-1 bg-gray-200 rounded-2xl`]}>
          <Text style={[tw`text-black font-mono text-base`]}>
            International
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tw`px-4 py-1 bg-gray-200 rounded-2xl`]}>
          <Text style={[tw`text-black font-mono text-base`]}>Politics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Explore;
