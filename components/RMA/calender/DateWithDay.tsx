import React, {FunctionComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';

interface DateWithDayDataType {
  date: number;
  day: string;
}

interface DateWithDay {
  oneDateWithDay: DateWithDayDataType;
}

const DateWithDay: FunctionComponent<DateWithDay> = ({oneDateWithDay}) => {
  return (
    <View style={[tw`text-center border rounded-xl w-12 mx-3 py-3`]}>
      <TouchableOpacity>
        <Text style={[tw`text-center text-black font-bold`]}>
          {oneDateWithDay.date}
        </Text>
        <Text style={[tw`text-center text-black`]}>{oneDateWithDay.day}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateWithDay;
