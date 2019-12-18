import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../src/Home';
import Choices from '../src/Choices';
import {View} from 'react-native';

const HomeStack = createStackNavigator(
  {
    Home: {screen: Home},
    Choices: {screen: Choices},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(HomeStack);
export default () => (
  <View style={{flex: 1}}>
    <AppContainer />
  </View>
);
