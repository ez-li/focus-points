import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AppNavigator from './client/src/navigation/AppNavigator';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App(props) {
    return (

      <DismissKeyboard>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </DismissKeyboard>
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
  },
});
