import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 60,
      timout: this.props
    };
  }
  componentDidMount() {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }
  decrementClock = () => {   
    if (this.state.timer === 0) {
      clearInterval(this.clockCall);
    }   
    this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
  };

  render() {
    let timeout = this.props.treeBuild.timeout;    
    return (
      <View style={{ justifyContent: 'center' }}>

        <Text style={{ paddingTop: 80, textAlign: 'center' }}>
          time to focus: {this.state.timer} min
          time to focus: {this.state.timeout} min
          time to focus: {timeout} min
        </Text>

      </View>
    );
  }
}