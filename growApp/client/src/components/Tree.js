import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { View, TextInput, StyleSheet, Text, Switch } from 'react-native';

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
      <View style={{ justifyContent: 'center' }}>
        <Image
            source={require('../../assets/images/tree.png')}
            style={{ height: 40 }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});