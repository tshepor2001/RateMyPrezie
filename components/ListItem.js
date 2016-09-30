import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Toolbar, Card, Button, Icon } from 'react-native-material-design';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {

    return (
      <Card key={this.props.item._key}>
        <Card.Body>
          <Text style={styles.cardHeader}> {this.props.item.title.toUpperCase()} </Text>
          <Text style={styles.cardOpeningLine}> By: {this.props.item.presenter} </Text>
          <Text style={styles.cardOpeningLine}> {this.props.item.duration} </Text>
        </Card.Body>
        <Card.Actions position="right">
          <TouchableHighlight onPress={this.props.onPress}>
            <Text> Rate </Text>
          </TouchableHighlight>
        </Card.Actions>
      </Card>);

  }
}

module.exports = ListItem;
