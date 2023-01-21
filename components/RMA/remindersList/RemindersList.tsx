import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import tw from 'tailwind-react-native-classnames';
import SingleReminder from './SingleReminder';
import discord from '../../../assests/icons/discord.png';
import telegram from '../../../assests/icons/telegram.png';
import whatsapp from '../../../assests/icons/whatsapp.png';

const RemindersList = () => {
  const categories = [
    {label: 'Category 1', value: 'category1'},
    {label: 'Category 2', value: 'category2'},
    {label: 'Category 3', value: 'category3'},
  ];
  console.log('Type of discord is ' + typeof discord);

  const reminderOfParticularDay = [
    {
      id: 1,
      text: 'Pay Electricity Bill',
      startTime: '10:00 am',
      repeatInfo: 'repeats 13th day of every month',
      streams: [telegram, discord, whatsapp],
    },
    {
      id: 2,
      text: 'Review Code',
      startTime: '7:00 pm',
      repeatInfo: 'repeats Every Day',
      streams: [telegram],
    },
    {
      id: 3,
      text: 'Practice Guitar',
      startTime: 'All Day',
      repeatInfo: 'repeats every alternate day',
      streams: [discord],
    },
  ];
  return (
    <View style={[tw`px-3`]}>
      <View style={[tw`flex flex-row items-center justify-between`]}>
        <Text style={[tw`text-black`]}>Jan 21, Saturday | Today</Text>
        <Dropdown
          style={[tw`w-28 text-black`]}
          containerStyle={[tw`text-black`]}
          data={categories}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Categories"
          onChange={item => console.log(item)}
        />
      </View>
      <View>
        <FlatList
          data={reminderOfParticularDay}
          renderItem={({item}) => <SingleReminder reminder={item} />}
        />
      </View>
    </View>
  );
};

export default RemindersList;
