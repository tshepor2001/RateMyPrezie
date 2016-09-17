/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  TouchableOpacity,
  ToolbarAndroid,
  BackAndroid,
} from 'react-native';

import { setTheme, MKColor } from 'react-native-material-kit';
var Cards = require('./app/cards');


setTheme({
  primaryColor: MKColor.Purple,
  primaryColorRGB: MKColor.RGBPurple,
  accentColor: MKColor.Amber,
});

class RateMyPrezi extends Component {
  render() {
    return (
      <ScrollView style={styles.list}>
        <TouchableOpacity onPress={() => {
          this.props.navigator.push({
            title: 'Cards',
            component: Cards,
          });
        }}>
          <Cards/>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RateMyPrezi', () => RateMyPrezi);
