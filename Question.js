import React, {PropTypes, Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  TouchableOpacity,
  ToolbarAndroid,
  TouchableHighlight,
  BackAndroid,
} from 'react-native';

import {Toolbar, Card, Button, Icon } from 'react-native-material-design';

export default class Question extends Component {
    static propTypes = {
            title: PropTypes.string.isRequired,
            onForward: PropTypes.func.isRequired,
            onBack: PropTypes.func.isRequired
        }
    viewQuestionDetails(question){
        this.props.onForward(question)
    }
    
    render(){
        const questions = [
          {
            questionId:"0122",
            title: "STYLE OF DELIVERY",
            description: "Did the speaker use clear accesible language ?",
            subQuestions:[ ]

          },
          {
            questionId:"0123",
            title: "PRESENTATION LENGTH",
            description: "Was the presentation an appropriate length ?",
            subQuestions:[ ]
          }

        ]
        const renderedQuestions = questions.map((question)=>{
          return <Card key={question.questionId}>
                    <Card.Body>
                        <Text> {question.description} </Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="Rate" onPress={this.viewQuestionDetails.bind(this, question)} text={"Rate"}/>
                    </Card.Actions>
                        
                </Card>
        });

    const toolBarIcon = this.props.index!=0 ? "arrow-back": "menu";
    return (<View>
      <Toolbar title={this.props.title} onIconPress={this.props.onBack} icon={toolBarIcon} style={styles.toolbar}/>
          <ScrollView style={styles.list}>
            {renderedQuestions}
          </ScrollView>
      </View>
 )
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

