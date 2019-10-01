import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import TreeScreen from '../screens/TreeScreen.js';
import FinishScreen from '../screens/FinishScreen.js';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    TreeScreen: {
      screen: TreeScreen
    },
    FinishScreen: {
      screen: FinishScreen
    }

});

export default AppContainer = createAppContainer(RootStack);