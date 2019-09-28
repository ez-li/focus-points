import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Text, TextInput, View, StyleSheet } from 'react-native';
// import ZipCode from './SetZipCode.js';
// import TimeOut from './SetTimeOut.js';

export default class BuildTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timeout: 0,
        zipcode: '',
        currentTime: ''
    };
  }

  render() {
    return (
      <View style={{padding: 20}}>        

        <View style={{padding: 20}}>
          <Slider
            // style={styles.sliderContainer}
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
            // style={styles.zipcodeInput}
            placeholder="enter Zipcode"
            keyboardType={'numeric'}
            onChangeText={(zipcode) => this.setState({zipcode})}
            value={this.state.zipcode}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    // marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center"
  },
  zipcodeInput: {
    // marginLeft: 10,
    // marginBottom: 20,
    height: 40
  }

});