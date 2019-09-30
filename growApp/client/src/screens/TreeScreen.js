import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import Tree from '../components/TreeGenerator.js';

export default class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ justifyContent: 'center' }}>

        <Tree treeBuild={navigation.getParam('treeBuild')}/>

        <Text style={{ paddingTop: 80, textAlign: 'center' }}>
          time to focus:  {JSON.stringify(navigation.getParam('treeBuild').timeout)}
        </Text> 

      </View>
    );
  }
}