import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import BuildTree from '../components/BuildTree.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={styles.appTitle}>
          focus flowers{"\n"}
        </Text> 
        <Text style={{textAlign: 'center'}}>
          don't lose focus! 
        </Text>

        <View style={styles.treeContainer}>
          <Image
            source={require('../../assets/images/tree.png')}
            style={{ height: 40 }}
          />
        </View>

        <BuildTree/>
        
        <Button
          style={styles.startButton}
          title="start"
          onPress={() => this.props.navigation.navigate('TreeScreen')}
        /> 

      </View>

    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    fontSize: 19
  },
  treeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  startButton: {
    
  }
});
