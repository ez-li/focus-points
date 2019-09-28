import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class SetZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
        zipcode: ''
    };
  }

  render() {
    return (
      <View style={{padding: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="enter Zipcode"
          keyboardType={'numeric'}
          onChangeText={(zipcode) => this.setState({zipcode})}
          value={this.state.zipcode}
        />
      </View>
    );
  }
}