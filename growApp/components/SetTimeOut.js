import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Text, View, StyleSheet, Picker } from 'react-native';
// import Slider from '@react-native-community/slider';

export default class TimeOut extends React.Component {
    state = {
      timeout: 20
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Slider
            minimumValue={0}
            maximumValue={120}
            step={1}
            value={this.state.timeout}
            onValueChange={timeout => this.setState({ timeout })}
          />
          <Text>
            {this.state.timeout} minutes
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
    //   alignItems: "stretch",
      justifyContent: "center"
    }
  });

// export default class SetTimeOut extends Component {
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       timeout: 0
//     }
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Set Time Out:</Text>

//         <Slider
//         style={{width: 200, height: 40}}
//         minimumValue={0}
//         maximumValue={120}
//         minimumTrackTintColor="#FFFFFF"
//         maximumTrackTintColor="#000000"
//         />

//         {/* <Picker
//           style={styles.picker} itemStyle={styles.pickerItem}
//           selectedValue={this.state.timeout}
//           onValueChange={(time) => this.setState({timeout: time})}
//         >
//           <Picker.Item label="15 min" value="15" />
//           <Picker.Item label="30 min" value="30" />
//           <Picker.Item label="60 min" value="60" />
//           <Picker.Item label="90 min" value="90" />
//         </Picker> */}
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // flexDirection: 'column',
//     // alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   picker: {
//     width: 200,
//     backgroundColor: '#FFF0E0',
//     borderColor: 'black',
//     borderWidth: 1,
//   },
//   pickerItem: {
//     color: 'red'
//   }
// });
