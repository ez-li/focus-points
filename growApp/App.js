import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './client/src/screens/HomeScreen.js.js';
import FocusTree from './client/src/screens/FocusTree.js.js';

const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    FocusTree:{screen: FocusTree}
  });

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}