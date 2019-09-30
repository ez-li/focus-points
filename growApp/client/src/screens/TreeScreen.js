import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import Tree from '../components/TreeGenerator.js';

export default class TreeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        timer: Number(this.props.navigation.getParam('treeBuild').timeout),
        stopFocus: false
    };
  }
  componentDidMount() {
    this.startTimer();
  }
  startTimer() {
    this.clockRunning = setInterval(this.countDown(), 1000);
  }
  countDown() {
    let currTimeLeft = this.state.timer - 1;
    if (currTimeLeft === 0) {
      clearInterval(this.clockRunning);
    }
    this.setState({
      timer: currTimeLeft
    });
  }
  componentWillUnmount() {
    clearInterval(this.clockRunning)
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ justifyContent: 'center' }}>

        <Tree treeBuild={navigation.getParam('treeBuild')}/>

        <Text>
          {Number(this.props.navigation.getParam('treeBuild').timeout.toString())}
        </Text>

        <Text style={{ paddingTop: 80, textAlign: 'center' }}>
          time to focus: {this.state.timer} minutes
        </Text>

      </View>
    );
  }
}