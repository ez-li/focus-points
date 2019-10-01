import React from 'react';
import { Image, ImageBackground, Button, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import BuildTree from '../components/BuildTree.js';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

let treeBuild = {};
let currWeather = [];
let screenStyle = {};
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      background: [],
      style: {}
    };
  }
  setBackground = (weather) => {
    let backgroundImg = [];
    currWeather = weather;
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
      weather: weather,
      background: backgroundImg
    })
    currWeather = backgroundImg;
  }
  setNightMode = (bool) => {
    if (bool) {
      let s = {backgroundColor: 'black', color: 'white'};
      this.setState({
        style: s
      })
    } else {
      let s = {backgroundColor: 'white', color: 'black'};
      this.setState({
        style: s
      })
    }
  }
  treeBuilder = (state) => {
    treeBuild = state;
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
          setNightMode={this.setNightMode}
        />
        
        <Button
          title="start"
          onPress={() => this.props.navigation.navigate('TreeScreen', {
            treeBuild: treeBuild,
            background: currWeather
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
    height: 800,
    width: 800
  }
});
