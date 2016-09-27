
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
      return (<Navigator initialRoute={{ title: 'My initial Scene', index:0}}
              renderScene={(route, navigator) => { 
                return  <Question onForward={()=> {
                    const nextIndex = route.index + 1;
                    navigator.push({
                        title: 'Scene' + nextIndex,
                        index: nextIndex,
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
