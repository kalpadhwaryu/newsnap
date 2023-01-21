import React from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const onYourRadarData = [
  {text: 'Sahebs Wedding', date: '7th Feb'},
  {text: 'YCombinator', date: '31st March'},
];

const OnYourRadar = () => {
  return (
    <View style={[tw`px-3 mb-2`]}>
      <Text style={[tw`text-black font-bold mb-1`]}>On Your Radar</Text>
      <View style={[tw`flex flex-row`]}>
        {onYourRadarData.map(each => (
          <View style={[tw`border rounded-xl px-2 py-1 w-2/5 mr-2`]}>
            <Text style={[tw`text-black`]}>{each.text}</Text>
            <Text style={[tw`text-black`]}>{each.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default OnYourRadar;
