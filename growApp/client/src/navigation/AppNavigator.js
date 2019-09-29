import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen.js';
import TreeScreen from '../screens/TreeScreen.js';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    }
    ,
    TreeScreen: {
      screen: TreeScreen
    }
});

export default AppContainer = createAppContainer(RootStack);