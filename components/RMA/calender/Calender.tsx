import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DateWithDay from './DateWithDay';
import tw from 'tailwind-react-native-classnames';

const Calender = () => {
  const months = [
    {label: 'January', value: 'january'},
    {label: 'February', value: 'february'},
    {label: 'March', value: 'march'},
    {label: 'April', value: 'april'},
    {label: 'May', value: 'may'},
    {label: 'June', value: 'june'},
    {label: 'July', value: 'july'},
    {label: 'August', value: 'august'},
    {label: 'September', value: 'september'},
    {label: 'October', value: 'october'},
    {label: 'November', value: 'november'},
    {label: 'December', value: 'december'},
  ];
  const datesWithDays = [
    {date: 20, day: 'Fri'},
    {date: 21, day: 'Sat'},
    {date: 22, day: 'Sun'},
    {date: 23, day: 'Mon'},
    {date: 24, day: 'Tue'},
  ];
  return (
    <View style={[tw`px-3 py-1 mb-1`]}>
      <View style={[tw`mb-2`]}>
        <Dropdown
          style={[tw`w-28 text-black`]}
          containerStyle={[tw`w-32 text-black`]}
          data={months}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="January"
          onChange={item => console.log(item)}
        />
      </View>
      <View style={[tw`flex flex-row justify-center`]}>
        <FlatList
          style={[tw`flex flex-row`]}
          numColumns={5}
          data={datesWithDays}
          renderItem={({item}) => <DateWithDay oneDateWithDay={item} />}
        />
      </View>
    </View>
  );
};

export default Calender;
