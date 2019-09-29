import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';

// import { Asset } from 'expo-asset';

import AppNavigator from './navigation/AppNavigator';

export default App = () => {
  return (
  <View>
    <HomeScreen/>;
    {/* <AppNavigator />; */}
  </View>
  )

  // const [isLoadingComplete, setLoadingComplete] = useState(false);

  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return (
  //     <AppLoading
  //       onError={handleLoadingError}
  //       onFinish={() => handleFinishLoading(setLoadingComplete)}
  //     />
  //   );
  // } else {
  //   return (
  //     <View style={styles.container}>
  //       <HomeScreen/>;
  //       <AppNavigator />;
  //     </View>
  //   )
  // }
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
