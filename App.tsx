import React, {
  FunctionComponent,
  useEffect,
  type PropsWithChildren,
} from 'react';
import {View} from 'react-native';
import Explore from './components/Explore';
import Header from './components/Header';
import Main from './components/Main';
import tw from 'tailwind-react-native-classnames';
import SplashScreen from 'react-native-splash-screen';

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={[tw`flex-1 bg-white w-full`]}>
      <Header />
      <Explore />
      <Main />
    </View>
  );
};

export default App;
