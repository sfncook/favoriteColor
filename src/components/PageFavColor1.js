import React, { Component } from 'react';

import '../App.css';
import {Color} from "../utils";
import TextLink from "./TextLink";

class PageFavColor1 extends Component {

  render() {
    return (
      <div className="centered">
        <h1>PARTICIPANTS’ FAVORITE COLORS:</h1>
        {Object.keys(Color).map((colorName)=>{
          const text = colorName+' #/%';
          return <div key={text}>{text}</div>;
        })}
        <div style={{marginTop:'20px'}}><TextLink text={'NEXT'} click={this.props.goNext} /></div>
      </div>
    );
  }// render

}

PageFavColor1.defaultProps = {
  goNext:null,
};

export default PageFavColor1;
