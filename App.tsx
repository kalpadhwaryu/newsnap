import React, {
  FunctionComponent,
  useEffect,
  type PropsWithChildren,
} from 'react';
import {Text, View} from 'react-native';
import Explore from './components/Explore';
import Header from './components/Header';
import Main from './components/Main';
import tw from 'tailwind-react-native-classnames';
import SplashScreen from 'react-native-splash-screen';
import AllReminders from './screens/AllReminders';

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={[tw`flex-1 bg-white w-full`]}>
      <AllReminders />
    </View>
  );
};

export default App;
