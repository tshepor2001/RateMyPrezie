
import React, { Component } from 'react';
import Presentation from './Presentation';
import Question from './Question';

export default class ViewHolder extends Component {
  render(){
      const viewIndex = this.props.index;
      switch(this.props.index){
          case 0:
                  return <Presentation  title={this.props.title}
                            index={this.props.index}
                            presentation={this.props.presentation}
                            onBack={this.props.onBack} 
                            onForward={this.props.onForward}/>
         case 1:
                 
             return <Question presentation={this.props.presentation}
                             title={this.props.presentation.title} 
                             onBack={this.props.onBack}/>
      }
      
  }
}
