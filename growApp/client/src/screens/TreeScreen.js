import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import Tree from '../components/TreeGenerator.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>

        <Tree/>

        <Text style={{ paddingTop: 80, textAlign: 'center' }}>
          time to focus:
        </Text> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    fontSize: 19,
    paddingTop: 40
  },
});
