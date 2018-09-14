import React, { Component } from 'react';

import '../App.css';
import { ColorProps } from '../utils.js';

class PageVerifyColor extends Component {

  render() {
    const colorName = ColorProps[this.props.colorIndex].name;
    return (
      <div className="centered">
        <h1>YOU CHOSE {colorName}</h1>
        <div style={{marginTop:'20px'}}>IF YOU WANT TO SELECT A DIFFERENT COLOR, <span onClick={this.props.goBack} className={'text-link'}>GO BACK</span>.</div>
        <div style={{marginTop:'20px'}}>IF {colorName} IS CORRECT, <span onClick={this.props.goNext} className={'text-link'}>CLICK HERE</span>.</div>
      </div>
    );
  }// render

}

PageVerifyColor.defaultProps = {
  colorIndex:null,
  goBack:null,
  goNext:null,
};

export default PageVerifyColor;
