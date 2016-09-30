
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
import Presentation from './Presentation';
import Question from './Question';

class RateMyPrezi extends Component {

  constructor() {
    super()
  }
  render() {
      return (
        <Navigator
          initialRoute = {{ title: 'Building a React native app', id:0}}
          renderScene = {this.renderScene}/>
      );
  }
  _presentation = {}
  renderScene(route, navigator) {

    switch (route.id) {
      case 0:
        return <Presentation onForward={(presentation)=> {
          route.id++;
          _presentation = presentation;
          navigator.push({
            title: presentation.title,
            index: 1
          });
        }}
          index={route.id}
          title={route.title}/>
          case 1:
            return <Question onBack={ () => {
              // if( route.index > 0) {
                navigator.pop();
              // }
              route.id--;
            }}
              index={route.id}
              title={_presentation.title}
              presentation={_presentation}/>
      default:

    }
  }
}

AppRegistry.registerComponent('RateMyPrezi', () => RateMyPrezi);
