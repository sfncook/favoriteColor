import React, { Component } from 'react';

import TextLink from "./TextLink";
import '../App.css';

class PageColorPick1 extends Component {

  colors = [
    'GREEN',
    'BLUE',
    'PURPLE',
    'RED',
    'ORANGE',
    'YELLOW',
    'BROWN',
    'PINK',
    'BLACK',
    'GRAY',
    'WHITE',
    'TURQUOISE',
    'BEIGE',
  ];

  render() {
    return (
      <div className="centered">
        <h1 style={{whiteSpace:'nowrap', fontWeight:'normal'}}>WHAT IS YOUR FAVORITE COLOR?</h1>
        {this.colors.map((color)=>{
          return <TextLink text={color} click={this.clickColor(color)} key={color}/>;
        })}
        <div style={{marginTop:'30px'}}>PLEASE CLICK ON YOUR FAVORITE COLOR.</div>
        <div>
          <div style={{marginTop:'10px', color:'darkgray', width:'330px', margin:'auto'}}>(Random color order each time page is viewed. Each color text links to next page.)</div>
        </div>
      </div>
    );
  }// render

  clickColor(color) {
    return (e)=>{
      e.preventDefault();
      this.props.pickColor(color);
    }
  }
}

PageColorPick1.defaultProps = {
  pickColor:null
};

export default PageColorPick1;
