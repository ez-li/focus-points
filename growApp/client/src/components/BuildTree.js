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

  _handleDaySwitch = () =>
  this.setState(state => ({
    nightMode: !state.nightMode,
  }));

  render() {
    return (
      <View style={{ justifyContent: 'center' }}>

        <View style={{padding: 15}}>
          <Slider
            style={styles.timeSlider}
            minimumValue={0}
            maximumValue={120}
            step={1}
            value={this.state.timeout}
            onValueChange={timeout => this.setState({ timeout })}
          />
          <Text style={{textAlign: 'center'}}>
            {this.state.timeout} minutes
          </Text>
        </View>

        <View style={{padding: 15}}>
          <TextInput
            style={styles.zipcodeInput}
            placeholder="enter zipcode"
            keyboardType={'numeric'}
            onChangeText={(zipcode) => this.setState({zipcode})}
            value={this.state.zipcode}
            maxLength={5}
          />
        </View>

        <View style={{padding: 15, alignItems: 'center'}}>
          <Switch
            style={styles.daySwitch}
            onValueChange={this._handleDaySwitch}
            value={this.state.nightMode}
          />
            { this.state.nightMode ? 
            <Text>night mode </Text> : 
            <Text> day mode</Text> }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeSlider: {
    textAlign: 'center',
    width: 250
  },
  zipcodeInput: {
    paddingTop: 5,
    textAlign: 'center'
  },
  daySwitch: {
    backgroundColor: '#fff',
    marginBottom: 10
  }
});