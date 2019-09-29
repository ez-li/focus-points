import React from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import Tree from '../components/Tree.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.appTitle}>
          FOCUS{"\n"}
        </Text> 

        <Tree/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    fontSize: 19,
    paddingTop: 40
  },
});
