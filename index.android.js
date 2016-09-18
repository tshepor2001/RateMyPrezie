
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

import {Toolbar, Card, Button } from 'react-native-material-design';
class RateMyPrezi extends Component {
  render() {
    const questions = [
      {
        questionId:"0122",
        title: "STYLE OF DELIVERY",
        description: "Did the speaker use clear accesible language ?"
      },
      {
        questionId:"0123",
        title: "PRESENTATION LENGTH",
        description: "Was the presentation an appropriate length ?"
      }

    ]
    const renderedQuestions = questions.map((question)=>{
      return <Card key={question.questionId}>
                <Card.Body>
                    <Text> {question.description} </Text>
                </Card.Body>
                <Card.Actions position="right">
                    <Button value="ACTION" text={"Rate"}/>
                </Card.Actions>
                    
            </Card>
    });

    return (<View>
      <Toolbar title={"Building an app with react native"} style={styles.toolbar}/>
          <ScrollView style={styles.list}>
            {renderedQuestions}
          </ScrollView>
      </View>
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
    list:{
        marginTop:60
    }
  
});

AppRegistry.registerComponent('RateMyPrezi', () => RateMyPrezi);
