
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
import Question from './Question';

class RateMyPrezi extends Component {
  render() {
      return (<Navigator initialRoute={{ title: 'Building a React native app', index:0}}
              renderScene={(route, navigator) => { 
                return  <Question onForward={(question)=> {
                    const nextIndex = route.index + 1;
                    navigator.push({
                        title: question.title,
                        index: nextIndex,
                        question
                    });
                }} onBack = { () => {
                    if( route.index > 0) {
                        navigator.pop();
                    }
                }}
                index={route.index}
                title={route.title}/>
  }}
  />
  );
}
}

AppRegistry.registerComponent('RateMyPrezi', () => RateMyPrezi);
