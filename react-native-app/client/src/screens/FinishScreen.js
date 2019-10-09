import React from 'react';
import { Image, Button, Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default class FinishScreen extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
	    touchCount: 0,
      points: 0
		};
	}
  render() {
    const { navigation } = this.props;
    return (
				<View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.message}>
            you earned {navigation.getParam('points')} points!{'\n'}
            good focus!
          </Text>
          <Image
            style={styles.smallImage}
            source={require('../../assets/images/coin.png')}
          />
				</View>
    );
  }
}
const styles = StyleSheet.create({
  message: {
    marginTop: 100,
    fontSize: 20,
    textAlign: 'center'
  },
  smallImage: {
    width: 50,
    height: 50
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 800,
    width: 800
  }
});
