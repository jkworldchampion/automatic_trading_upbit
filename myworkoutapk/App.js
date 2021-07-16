/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class IU extends Component {
  render () {
    let iuImg = '';
    if (this.props.type == 'one') {
      iuImg = require('./assets/iu.jpeg');

    } else if (this.props.type == 'two') {
      iuImg = require('./assets/iu2.jpeg');
    }
    return (
      <View>
        <Image source = {iuImg} style = {{width: 200, height: 200}}/>
      </View>
    )
  }
}

class App extends Component  {
  
  constructor(props) {
    super(props);

    this.state = {
      address : '충남 아산'
    }
  }

  writeAddress = () => {
    this.setState( state = {
      address : '경기도 수원'
    })
  }

  writeReset = () => {
    this.setState( state = {
      address : '충남 아산'
    }, function() {
      alert("값이 바뀜")
    })
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.hello}>Hello_World!</Text>
        <IU type = 'one'/>
        <IU type = 'two'/>
  
        <Text> {this.state.address} </Text>
        <Button title = {'내가 대학에 있을때'} onPress = {this.writeAddress} />
        <Button title = {'방학일 때'} onPress = {this.writeReset} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  
  hello : {
    color : 'red'
  }
});

export default App;
