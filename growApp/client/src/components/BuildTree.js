import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Text, TextInput, View, Switch, StyleSheet } from 'react-native';

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

  _handleDaySwitch = () =>
  this.setState(state => ({
    nightMode: !state.nightMode,
  }));

  render() {
    return (
      <View style={{padding: 20}}>

        <View style={{padding: 20}}>
          <Slider
            style={styles.timeSlider}
            minimumValue={0}
            maximumValue={120}
            step={1}
            value={this.state.timeout}
            onValueChange={timeout => this.setState({ timeout })}
          />
          <Text>
            {this.state.timeout} minutes
          </Text>
        </View>

        <View style={{padding: 20}}>
          <TextInput
            style={styles.zipcodeInput}
            placeholder="enter zipcode"
            keyboardType={'numeric'}
            onChangeText={(zipcode) => this.setState({zipcode})}
            value={this.state.zipcode}
          />
        </View>

        <View style={{padding: 20}}>
          <Switch
            style={styles.daySwitch}
            onValueChange={this._handleDaySwitch}
            value={this.state.nightMode}
          />
            { this.state.nightMode ? 
            <Text>night mode</Text> : 
            <Text>day mode</Text> }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeSlider: {
    justifyContent: "center"
  },
  zipcodeInput: {
    height: 40
  },
  daySwitch: {
    justifyContent: "left",
    backgroundColor: '#fff'
  }
});