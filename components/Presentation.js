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
  ListView
} from 'react-native';
import Question from './Question';
import {Toolbar, Card, Button, Icon } from 'react-native-material-design';
const ListItem = require('./ListItem');
const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDGWzI6bz65MfQAA-z7UXoujkMb65S8oUY",
  authDomain: "ratemyprezie.firebaseapp.com",
  databaseURL: "https://ratemyprezie.firebaseio.com",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Presentation extends Component {

    static propTypes = {
            title: PropTypes.string.isRequired,
            onForward: PropTypes.func.isRequired,

        }

        constructor(props) {
          super(props);
          this.state = {
              dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
              })
          };
          this.itemsRef = this.getRef();
        }

        getRef() {
            return firebaseApp.database().ref('presentations');
        }

        listenForItems(itemsRef) {
          itemsRef.on('value', (snap) => {

            // get children as an array
            var presentations = [];
            snap.forEach((child) => {
              presentations.push({
                title: child.val().title,
                id: child.val().id,
                presenter: child.val().presenter,
                questions: child.val().questions,
                duration: child.val().duration,
              });
            });

            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(presentations)
            });
          });
        }

        componentDidMount() {
          this.listenForItems(this.itemsRef);
        }

    viewQuestionDetails(question){
        this.props.onForward(question)
    }

    _renderItem(item) {

    const onPress = () => {
      this.props.onForward(item);
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

    render(){
     console.log(this.props.index)
     switch(this.props.index){
         case 0:
               return <View>
                   <Toolbar title={this.props.title} 
                       onIconPress={this.props.onBack} 
                       icon={"menu"} style={styles.toolbar}/>
                           <ListView
                           dataSource={this.state.dataSource}
                       renderRow={this._renderItem.bind(this)}
                       enableEmptySections={true}
                       style={styles.list}/>

                   </View>
         case 1:
             return <Question presentation={this.props.presentation}
                             title={this.props.presentation.title} 
                             onBack={this.props.onBack}/>
         default:
              return <Text> Something went wrong</Text>
     }
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
