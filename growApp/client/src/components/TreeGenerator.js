import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Image, View, TextInput, StyleSheet, Text, Switch } from 'react-native';

export default class BuildTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

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


    for (let i = 0; i < timeout; i++) {
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

    return (
        <View style={{ alignItems: 'center'}}>

          <Image
            style={styles.treeImage}
            source={require('../../assets/images/tree.png')}
          />

          <View style={styles.flowersContainer}>
            { flowers }
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
    marginLeft: 50, 
    marginRight: 50,
    width: 300,
    height: 160
  },
  flowers: {
    zIndex: 1,
    width: 27,
    height: 27
  }
});