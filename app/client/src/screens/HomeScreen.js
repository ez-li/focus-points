import React from 'react';
import { Image, ImageBackground, Button, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import BuildTree from '../components/BuildTree.js';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

let treeBuild = {};
let weatherBgImage = [];
let nightBgImage = [];
let currWeather = '';
// let screenStyle = {};
let sendNightmode = false;
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
      background: [],
      nightBackground: [],
      bgstyle: {},
      nightMode: false,
      textTitleStyle: {
        paddingTop: 25,
        textAlign: 'center',
        fontSize: 18
      },
      textStyle: {textAlign: 'center'}
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
    weatherBgImage = backgroundImg;
  }
  setNightMode = (bool) => {
    if (bool) {
      let b = {backgroundColor: 'black', color: 'white'};
      let tts = {paddingTop: 25, textAlign: 'center', fontSize: 18, color: 'white'};
      let ts = {textAlign: 'center', color: 'white'};
      let nBg = [];
      nBg.push(<ImageBackground source={require('../../assets/images/night1.png')} style={styles.nightBg} />);
      this.setState({
        nightMode: true,
        bgstyle: b,
        textTitleStyle: tts,
        textStyle: ts,
        nightBackground: nBg
      })
      nightBgImage = nBg;
      sendNightmode = true;
    } else {
      let b = {backgroundColor: 'white', color: 'black'};
      let tts = {paddingTop: 25, textAlign: 'center', fontSize: 18, color: 'black'};
      let ts = {textAlign: 'center', color: 'black'};
      this.setState({
        nightMode: false,
        bgstyle: b,
        textTitleStyle: tts,
        textStyle: ts,
        nightBackground: []
      })
      nightBgImage = [];
      sendNightmode = false;
    }
  }
  treeBuilder = (state) => {
    treeBuild = state;
  }
  render() {
    return (
      <View style={this.state.bgstyle}>
      <DismissKeyboard>
      <View>

        <View>
          { this.state.nightBackground }
          { this.state.background }
        </View>

        <Text style={this.state.textTitleStyle}>
          focus flowers
        </Text> 
        <Text style={this.state.textStyle}>
          don't lose focus! 
        </Text>

        <View style={{alignItems: 'center', paddingTop: 15}}>
          {this.state.nightMode ? 
          <Image
            style={styles.treeImage}
            source={require('../../assets/images/tree_night.png')}
         />
          :
          <Image
            style={styles.treeImage}
            source={require('../../assets/images/tree.png')}
          />
          }
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
            background: weatherBgImage,
            nightBg: nightBgImage,
            nightmode: sendNightmode
          })}
        /> 

      </View>
      </DismissKeyboard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  treeImage: {
    width: 200,
    height: 200
  },
  startButton: {
    backgroundColor: '#fff'
  },
  backgroundImage: {
    flex: 1,
    height: 800,
    width: 800
  },
  nightBg: {
    flex: 1,
    height: 800,
    width: '100%'
  }
});
