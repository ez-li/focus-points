import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import Tree from '../components/TreeGenerator.js';
import Timer from '../components/Timer.js';

export default class TreeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ justifyContent: 'center' }}>

        <Tree treeBuild={navigation.getParam('treeBuild')}/>

        <Timer treeBuild={navigation.getParam('treeBuild')}/>

      </View>
    );
  }
}