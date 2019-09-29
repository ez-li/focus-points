import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import FocusTree from '../screens/FocusTree.js';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    }
    // ,
    // FocusTree: {
    //   screen: FocusTree
    // }
});

export default AppContainer = createAppContainer(RootStack);