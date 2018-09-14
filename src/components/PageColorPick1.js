import React, { Component } from 'react';

import TextLink from "./TextLink";
import '../App.css';
import { Color } from '../utils.js';

class PageColorPick1 extends Component {

  render() {
    // console.log('Object.keys(Color):',Object.keys(Color));
    return (
      <div className="centered">
        <h1 style={{whiteSpace:'nowrap', fontWeight:'normal'}}>WHAT IS YOUR FAVORITE COLOR?</h1>
        {Object.keys(Color).map((colorObj)=>{
          return <TextLink text={colorObj} click={this.clickColor(colorObj)} key={colorObj}/>;
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
