import React, {FunctionComponent} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import checkmark from '../../../assests/icons/checkmark.png';

interface Stream {
  stream: number;
}

interface ReminderType {
  id: number;
  text: string;
  startTime: string;
  repeatInfo: string;
  streams: Stream[];
}

interface Reminder {
  reminder: ReminderType;
}

const SingleReminder: FunctionComponent<Reminder> = ({reminder}) => {
  return (
    <View
      style={[tw`px-2 mb-2 ml-2 flex flex-row justify-between items-center`]}>
      <View>
        <Text style={[tw`text-black font-bold`]}>{reminder.text}</Text>
        <Text style={[tw`text-black`]}>{reminder.startTime}</Text>
        <Text style={[tw`text-black`]}>{reminder.repeatInfo}</Text>
        <View style={[tw`flex flex-row mt-1`]}>
          {reminder.streams.map((each, i) => (
            <Image style={[tw`h-7 w-7 mr-1`]} source={each} />
          ))}
        </View>
      </View>
      <TouchableOpacity>
        <View style={[tw`border rounded-xl p-3 mr-2 bg-yellow-300`]}>
          <Image style={[tw`h-5 w-7`]} source={checkmark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SingleReminder;
