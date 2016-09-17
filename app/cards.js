import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform
} from 'react-native';

import {
  getTheme
} from 'react-native-material-kit'

const theme = getTheme();

const Cards = React.createClass({
  render(){
    return(
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={theme.cardStyle}>
          <Text style={theme.cardTitleStyle}>Welcome</Text>
          <View
            style={{
              padding : 15,
            }}
            >
            <Text style={[theme.cardContentStyle, {padding:0}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </Text>
          </View>
          <View style={theme.cardActionStyle}>
            <Text>My Action</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    )
  }
})

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginTop: Platform.OS === 'android' ? 56 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10, marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
  },
});

module.exports = Cards;
