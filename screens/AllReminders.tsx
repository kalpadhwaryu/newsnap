import React from 'react';
import {View, Text, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Calender from '../components/RMA/calender/Calender';
import OnYourRadar from '../components/RMA/onYourRadar/OnYourRadar';
import ReminderInput from '../components/RMA/reminderInput/ReminderInput';
import RemindersList from '../components/RMA/remindersList/RemindersList';
import AllRemImg from '../assests/images/AllRem.png';
const AllReminders = () => {
  return (
    <View>
      <Image style={[tw`w-full`]} source={AllRemImg} />
      <Calender />
      <RemindersList />
      <OnYourRadar />
      <ReminderInput />
    </View>
  );
};

export default AllReminders;
