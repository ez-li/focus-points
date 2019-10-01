import React, { PropTypes } from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 60,
      timeout: 0,
      startTimer: false
    };
  }
  componentDidMount() {
    if (this.state.startTimer) {
      this.props.startTimer();
    }
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  };
  decrementClock = () => {   
    if (this.state.timeout === 1) {
      clearInterval(this.clockCall);
    }   
    this.setState((prevstate) => ({ timeout: prevstate.timeout -1 }));
  };
  render() {
    let timeout = this.props.treeBuild.timeout;
    return (
      <View style={{ justifyContent: 'center' }}>
        
        <Text style={{ paddingTop: 120, textAlign: 'center' }}>
          {this.state.startTimer ? 
            'time to focus: '+ this.state.timeout + ' min' + '\n' : 
            null}
        </Text>
        
        {this.state.startTimer ? null : 
          <Button
          title="begin"
          onPress={() => {
            this.setState({ timeout: timeout, startTimer: true })
            this.props.startTimer();
          }}
          />
        }

      </View>
    );
  }
}