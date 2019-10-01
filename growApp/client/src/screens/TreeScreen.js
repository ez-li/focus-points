import React from 'react';
import { Image, Button, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Tree from '../components/TreeGenerator.js';
import Timer from '../components/Timer.js';


export default class TreeScreen extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
			touchCount: 1,
			timerStarted: false,
			points: 0
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
	countPoints = (numOfFlowersRemaining) => {
		if (numOfFlowersRemaining < 0) {
			return
		}
		this.setState({
			points: numOfFlowersRemaining
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
						countPoints={this.countPoints}
					/>

					<View style={{height:200}}>
					<Timer 
						treeBuild={navigation.getParam('treeBuild')}
						startTimer={this.startTimer}
						/>
					
						{this.state.timerStarted ? 
							<Text style={{textAlign:'center', marginTop:-15}}>
								points: {this.state.points - 1}
							</Text> :
						null
						}
					</View>


				</View>
			</TouchableWithoutFeedback>
    );
  }
}