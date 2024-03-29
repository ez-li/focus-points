import React from 'react';
import { Image, Button, Text, View, StyleSheet, Vibration, TouchableWithoutFeedback} from 'react-native';
import Tree from '../components/TreeGenerator.js';
import Timer from '../components/Timer.js';


export default class TreeScreen extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
			touchCount: 0,
      timerStarted: false,
      points: 0,
      nightmode: false
		};
  }
  componentDidMount() {
  }
	handleOnPress = () => {
		this.setState((state) => ({
			touchCount: state.touchCount + 1
    }))
    const DURATION = 10000;
    Vibration.vibrate(DURATION);
	}
	startTimer = () => {
		this.setState({
			timerStarted: true
		})
  }
  timeUp = () => {
    let p = this.state.points;
    this.props.navigation.navigate('FinishScreen', {
      points: p
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
				<View>
          { navigation.getParam('nightBg') }
          <View style={styles.backgroundImage}>
            { navigation.getParam('background') }
          </View>
          <View>
            <Tree 
              treeBuild={navigation.getParam('treeBuild')}
              touchCount={this.state.touchCount}
              timerStarted={this.state.timerStarted}
              countPoints={this.countPoints}
              nightmode={navigation.getParam('nightmode')}
            />
          </View>

					<View style={{height:200, alignItems: 'center'}}>
						<Timer 
							treeBuild={navigation.getParam('treeBuild')}
              startTimer={this.startTimer}
              timeUp={this.timeUp}
              nightmode={navigation.getParam('nightmode')}
							/>
              {this.state.timerStarted ? 
              <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', marginTop:-25}}>
                <Image
                style={styles.smallImage}
                source={require('../../assets/images/b1.png')}
                />
                <Text style={navigation.getParam('nightmode') ? {color:'white'} : {color:'black'} }> = </Text>
                <Image
                style={styles.smallImage}
                source={require('../../assets/images/coin.png')}
                />
								<Text style={navigation.getParam('nightmode') ? {textAlign:'center',color:'white'} : {textAlign:'center',color:'black'} }>
								 {' '}= points: {this.state.points}
								</Text> 
                </View> :
							null
							}
					</View>

				</View>
			</TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  smallImage: {
    width: 27,
    height: 27
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800,
    width: 800
  },
  nightBg: {
    flex: 1,
    height: 800,
    width: '100%'
  }
});
