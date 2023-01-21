import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface Stream {
  stream: string;
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
    <View style={[tw`border`]}>
      <Text>{reminder.text}</Text>
      <Text>{reminder.startTime}</Text>
      <Text>{reminder.repeatInfo}</Text>
      <View style={[tw`flex flex-row`]}>
        {reminder.streams.map((each, i) => (
          <Text key={i}>{each}</Text>
        ))}
      </View>
    </View>
  );
};

export default SingleReminder;
