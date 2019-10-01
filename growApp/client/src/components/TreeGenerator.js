import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Image, View, TextInput, StyleSheet, Text, Switch } from 'react-native';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [],
      initialCount: 0,
      removedFlowers: 0,
      timerStarted: false
    };
  }
  componentDidMount() {
    this.makeFlowers();
  }
  componentDidUpdate() {
    if (this.props.timerStarted) {
      let count = this.props.touchCount;
      if (count > this.state.removedFlowers) {
        let newFlowers = this.state.flowers;
        newFlowers.pop();
        this.setState((state) => ({
          flowers: newFlowers,
          removedFlowers: state.removedFlowers + 1
        }));
        this.props.countPoints(this.state.initialCount - this.state.removedFlowers - 1)
      }
    }
  }
  makeFlowers() {
    let timeout = this.props.treeBuild.timeout;
    const flowers = [];
    const images = [];
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b1.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b2.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b3.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b4.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b5.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b6.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b7.png')}/>);
    images.push(<Image style={styles.flowers} source={require('../../assets/images/b8.png')}/>);
  
    for (let i = 0; i <= timeout; i++) {
      let xP = '' + Math.floor(Math.random()*100) + '%';
      let yP = '' + Math.floor(Math.random()*100) + '%';
      let flower = images[Math.floor(Math.random()*images.length)];
      flowers.push(
        <View 
        key={i}
        style={{ 
          position: 'absolute',
          zIndex: 99,
          left: xP,
          top: yP
          }}
        >
          { flower }
        </View>
      )
    }
    let count = flowers.length;
    this.setState({
      flowers: flowers,
      initialCount: count
    });
  }
  render() {

    return (
      <View style={{ alignItems: 'center'}}>

        <Image
          style={styles.treeImage}
          source={require('../../assets/images/tree.png')}
        />

        <View style={styles.flowersContainer}>
          { this.state.flowers }
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  treeImage: {
    marginTop: 40,
    width: 350,
    height: 350
  },
  flowersContainer: {
    position: 'absolute',
    marginTop: 50,
    marginLeft: 25, 
    width: 290,
    height: 160
  },
  flowers: {
    zIndex: 1,
    width: 27,
    height: 27
  }
});