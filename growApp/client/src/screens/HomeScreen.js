import React from 'react';
import { Image, Button, Text, View } from 'react-native';
import BuildTree from '../components/BuildTree.js';
import FocusTree from './FocusTree.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={styles.container}>

          <View style={{padding: 20}}>
            <Text>
              focus flowers{"\n"}
              don't lose focus!
            </Text>
          </View>      

          <BuildTree/>
        </View>

        {/* <Button
          title="start"
          onPress={() => this.props.navigation.navigate(FocusTree)}
        /> */}
      </View>
    );
  }
}
