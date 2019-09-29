import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Image, View, TextInput, StyleSheet, Text, Switch } from 'react-native';

export default class BuildTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timeout: 20,
        zipcode: '',
        currentTime: '',
        nightMode: false
    };
  }

  render() {
    return (
        <View style={{ alignItems: 'center'}}>

          <Image
            style={styles.treeImage}
            source={require('../../assets/images/tree.png')}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  treeImage: {
    marginTop: 40,
    width: 350,
    height: 350
  },
});