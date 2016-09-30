
import React, { Component } from 'react';
import Presentation from './Presentation';
import Question from './Question';

export default class ViewHolder extends Component {
  render(){
      const viewIndex = this.props.index;
      return <Presentation  title={this.props.title}
                            index={this.props.index}
                            presentation={this.props.presentation}
                            onBack={this.props.onBack} 
                            onForward={this.props.onForward}/>

      }
      
  }
