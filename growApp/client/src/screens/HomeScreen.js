import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import BuildTree from '../components/BuildTree.js';


const treeBuild = {};
export default class HomeScreen extends React.Component {

  treeBuildState = (state) => {
    treeBuild = state;
  }

  render() {
    return (
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
          onPress={() => this.props.navigation.navigate('TreeScreen')}
        /> 

      </View>

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
