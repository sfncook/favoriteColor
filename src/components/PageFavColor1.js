import React, { Component } from 'react';

import '../App.css';
import { ColorProps } from '../utils.js';

class PageFavColor1 extends Component {

  render() {
    return (
      <div className="centered">
        <h1>PARTICIPANTS’ FAVORITE COLORS:</h1>
        <div style={{marginTop:'20px'}}>IF YOU WANT TO SELECT A DIFFERENT COLOR, <span onClick={this.props.goBack} className={'text-link'}>GO BACK</span>.</div>
        <div style={{marginTop:'20px'}}>IF {colorName} IS CORRECT, CLICK HERE.</div>
      </div>
    );
  }// render

}

PageFavColor1.defaultProps = {
  colorIndex:null,
  goBack:null,
};

export default PageFavColor1;
