import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { View, TextInput, Button, StyleSheet, Text, Switch, Keyboard } from 'react-native';
import axios from 'axios';

export default class BuildTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timeout: 60,
        zipcode: '',
        nightMode: false,
        weather: '',
        textStyle: {textAlign: 'center'},
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
    };
  }
  componentDidMount() {
    this.props.treeBuilder(this.state);
  }
  componentDidUpdate(prevState) {
    if (this.state !== prevState) {
      this.props.treeBuilder(this.state);
    }
  }
  _handleDaySwitch = () => {
    this.setState(state => ({
      nightMode: !state.nightMode,
    }));
    this.props.setNightMode(!this.state.nightMode);
    if (!this.state.nightMode) {
      this.setState({
        textStyle: {
          textAlign: 'center',
          color: 'white'
        },
        timeSlider: {
          textAlign: 'center',
          width: 250
        },
        zipcodeInput: {
          paddingTop: 5,
          textAlign: 'center',
          color: '#fff',
        },
        daySwitch: {
          // backgroundColor: '#000',
          marginBottom: 10
        }
      })
    } else {
      this.setState({
        textStyle: {
          textAlign: 'center',
          color: 'black'
        },
        timeSlider: {
          textAlign: 'center',
          width: 250
        },
        zipcodeInput: {
          paddingTop: 5,
          textAlign: 'center'
        },
        daySwitch: {
          // backgroundColor: '#fff',
          marginBottom: 10
        }
      })
    }
  }
  getWeather = () => {
    axios.get('http://localhost:3000/api/weather', {
      params: {
        zipcode: this.state.zipcode
      }
    })
    .then((response) => {
      this.setState({
        weather: response.data
      });
      this.props.setBackground(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

  }
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>

        <View style={{marginTop: -42, padding: 15, alignItems: 'center'}}>
          <Slider
            style={this.state.timeSlider}
            minimumValue={0}
            maximumValue={120}
            step={1}
            value={this.state.timeout}
            onValueChange={timeout => this.setState({ timeout })}
          />
          <Text style={this.state.textStyle}>
            {this.state.timeout} minutes
          </Text>
        </View>

        <View style={{padding: 15, alignItems: 'center'}}>
          <TextInput
            style={this.state.zipcodeInput}
            placeholder="enter zipcode"
            placeholderTextColor='grey'
            keyboardType={'numeric'}
            value={this.state.zipcode}
            onChangeText={(zipcode) => {
              this.setState({ zipcode });
              if (zipcode.length === 5) {
                Keyboard.dismiss()
              }
            }}
            maxLength={5}
          />
        <Button
          title="submit"
          onPress={this.getWeather}
        /> 
        </View>

        <View style={{padding: 15, alignItems: 'center'}}>
          <Switch
            style={this.state.daySwitch}
            onValueChange={this._handleDaySwitch}
            value={this.state.nightMode}
          />
            { this.state.nightMode ? 
            <Text style={this.state.textStyle}>night mode </Text> : 
            <Text style={this.state.textStyle}> day mode</Text> }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});