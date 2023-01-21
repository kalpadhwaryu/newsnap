import React from 'react';
import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import mic from '../../../assests/icons/mic.png';
import fish from '../../../assests/icons/fish.png';

const ReminderInput = () => {
  return (
    <View style={[tw`px-3 flex flex-row items-center justify-between`]}>
      <View
        style={[
          tw`flex flex-row items-center border rounded-xl px-2 py-1 w-3/4 justify-between`,
        ]}>
        <TextInput
          style={[tw`rounded-xl px-2`]}
          // onChangeText={}
          // value={}
          placeholder="Remind me about..."
        />
        <TouchableOpacity
          style={[tw`border rounded-3xl p-2 px-3 bg-yellow-300`]}>
          <Image style={[tw`h-7 w-5`]} source={mic} />
        </TouchableOpacity>
      </View>
      <View style={[tw`mr-2 rounded-3xl`]}>
        <TouchableOpacity>
          <Image style={[tw`h-14 w-16`]} source={fish} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReminderInput;
