import React, { Component } from 'react';

import TextLink from "./TextLink";
import '../App.css';
import { Color } from '../utils.js';

class PageColorPick1 extends Component {

  render() {
    // console.log('Object.keys(Color):',Object.keys(Color));
    return (
      <div className="centered">
        <h1>WHAT IS YOUR FAVORITE COLOR?</h1>
        {Object.keys(Color).map((colorName)=>{
          const colorIndex = Color[colorName];
          return <TextLink text={colorName} click={this.clickColor(colorIndex)} key={colorName}/>;
        })}
        <div style={{marginTop:'30px'}}>PLEASE CLICK ON YOUR FAVORITE COLOR.</div>
        <div>
          <div style={{marginTop:'10px', color:'darkgray', width:'330px', margin:'auto'}}>(Random color order each time page is viewed. Each color text links to next page.)</div>
        </div>
      </div>
    );
  }// render

  clickColor(colorIndex) {
    return (e)=>{
      e.preventDefault();
      this.props.pickColor(colorIndex);
    }
  }
}

PageColorPick1.defaultProps = {
  pickColor:null
};

export default PageColorPick1;
