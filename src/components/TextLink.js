import React, { Component } from 'react';

import '../App.css';

class TextLink extends Component {

  render() {
    return (
      <div><span className={'text-link'} onClick={this.props.click}>{this.props.text}</span></div>
    );
  }// render

}

TextLink.defaultProps = {
  text:'not set',
  click:null,
};

export default TextLink;
