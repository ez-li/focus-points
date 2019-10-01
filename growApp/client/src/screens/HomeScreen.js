import React from 'react';
import { Image, ImageBackground, Button, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import BuildTree from '../components/BuildTree.js';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

let treeBuild = {};
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: []
    };
  }
  setBackground = (weather) => {
    let backgroundImg = [];
    console.log(weather)
    if (weather === 'Clear') {
      backgroundImg.push(<ImageBackground source={require('../../assets/images/bg_clear.png')} style={styles.backgroundImage} />);
    }
    if (weather === 'Rain' || weather === 'Drizzle' || weather === 'Thunderstorm') {
      backgroundImg.push(<ImageBackground source={require('../../assets/images/bg_rain.png')} style={styles.backgroundImage} />);
    }
    if (weather === 'Clouds' || weather === 'Haze') {
      backgroundImg.push(<ImageBackground source={require('../../assets/images/bg_cloudy.png')} style={styles.backgroundImage} />);
    }
    this.setState({
      background: backgroundImg
    })
    console.log(this.state.background)
  }
  treeBuilder = (state) => {
    treeBuild = state;
    if (state.weather !== '') {
      this.setBackground(state.weather);
    }
  }
  render() {
    return (
      <DismissKeyboard>
      <View>

        <View>
        { this.state.background }
        </View>

        <Text style={styles.appTitle}>
          focus flowers
        </Text> 
        <Text style={{textAlign: 'center'}}>
          don't lose focus! 
        </Text>

        <View style={{alignItems: 'center', paddingTop: 15}}>
          <Image
            style={styles.treeImage}
            source={require('../../assets/images/tree.png')}
          />
        </View>

        <BuildTree 
          treeBuilder={this.treeBuilder}
          setBackground={this.setBackground}
        />
        
        <Button
          title="start"
          onPress={() => this.props.navigation.navigate('TreeScreen', {
            treeBuild: treeBuild,
          })}
        /> 

      </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    paddingTop: 25,
    textAlign: 'center',
    fontSize: 18
  },
  treeImage: {
    width: 200,
    height: 200
  },
  startButton: {
    backgroundColor: '#fff'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 500,
    width: 500
  }
});
