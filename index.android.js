
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
import ViewHolder from './components/ViewHolder';

class RateMyPrezi extends Component {

  constructor() {
    super()
  }
  render() {
      return (
        <Navigator
          initialRoute = {{presentation:{}, title: 'Building a React native app', index:0}}
          renderScene = {this.renderScene}/>
      );
  }
  renderScene(route, navigator) {

return <ViewHolder onForward={(presentation)=> {
          let index = route.index ;
          navigator.push({
            title: presentation.title + index,
            index: index + 1,
            presentation : presentation
          });
              
        }}
        onBack={()=>{
            navigator.pop();
        }}
          presentation={route.presentation}
          index={route.index}
          title={route.title}/>
  }
}

AppRegistry.registerComponent('RateMyPrezi', () => RateMyPrezi);
