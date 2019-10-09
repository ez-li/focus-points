import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { AppRegistry, Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './client/src/navigation/AppNavigator';

export default function App(props) {

  return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator/>
      </View>
)
}

async function loadAssetsAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./client/assets/images/tree.png')
    ])
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('main',() => App);

