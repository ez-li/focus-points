import React from 'react';
import { Image, Button, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback} from 'react-native';
import BuildTree from '../components/BuildTree.js';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

let treeBuild = {};
export default class HomeScreen extends React.Component {

  treeBuilder = (state) => {
    treeBuild = state;
  }

  render() {
    return (
      <DismissKeyboard>
      <View>

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

        <BuildTree treeBuilder={this.treeBuilder}/>
        
        <Button
          title="start"
          onPress={() => this.props.navigation.navigate('TreeScreen', {
            treeBuild: treeBuild
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
  }
});
