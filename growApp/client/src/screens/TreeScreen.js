import React from 'react';
import { Image, Button, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Tree from '../components/TreeGenerator.js';
import Timer from '../components/Timer.js';


export default class TreeScreen extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
			touchCount: 1,
			timerStarted: false
		};
	}
	handleOnPress = () => {
		this.setState((state) => ({
			touchCount: state.touchCount + 1
		}))
	}
	startTimer = () => {
		this.setState({
			timerStarted: true
		})
	}
  render() {
    const { navigation } = this.props;
    return (
			<TouchableWithoutFeedback onPress={() => this.handleOnPress()}>
				<View style={{ flex: 1, justifyContent: 'center' }}>

					<Tree 
						treeBuild={navigation.getParam('treeBuild')}
						touchCount={this.state.touchCount}
						timerStarted={this.state.timerStarted}
					/>

					<Timer 
						treeBuild={navigation.getParam('treeBuild')}
						startTimer={this.startTimer}
						/>

				</View>
			</TouchableWithoutFeedback>
    );
  }
}