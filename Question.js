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
            onBack: PropTypes.func.isRequired,
            presentation: PropTypes.object.isRequired,
        }
    render(){

        const renderedQuestions = this.props.presentation.questions.map((question)=>{
          return <Card key={question.id}>
                    <Card.Body>
                        <Text style={styles.cardHeader}> {question.title} </Text>
                        <Text> {question.description} </Text>
                    </Card.Body>
                    <Card.Actions position="right">
                     <TouchableHighlight onPress={this._addItem}>
                        <Text> Rate </Text>
                     </TouchableHighlight>
                    </Card.Actions>

                </Card>
        });

    return (<View>
      <Toolbar title={this.props.title} onIconPress={this.props.onBack} icon={'arrow-back'} style={styles.toolbar}/>
          <ScrollView style={styles.list}>
            {renderedQuestions}
          </ScrollView>
      </View>
 )
    }

    _addItem() {
  Alert.alert(
    'Add New Item',
    null,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {
        text: 'Add',
        onPress: (text) => {
          this.itemsRef.push({ title: text })
        }
      },
    ],
    'plain-text'
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
    },
    cardHeader: {
      fontSize: 18,
      color: '#0387D1',
    },

});
