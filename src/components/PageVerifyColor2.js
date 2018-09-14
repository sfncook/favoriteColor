import React, { Component } from 'react';

import '../App.css';

class PageVerifyColor2 extends Component {

  render() {
    const style = {
      width:'150px',
      height:'150px',
      background:this.props.color,
      border: '1px solid',
      margin: 'auto',
    };
    return (
      <div className="centered">
        <div style={style}>&nbsp;</div>
        <h1>YOU CHOSE THE ABOVE COLOR.</h1>
        <div>IF YOU WANT TO SELECT A DIFFERENT COLOR, GO BACK.</div>
        <div>IF YOU ARE HAPPY WITH THE ABOVE COLOR, CLICK HERE.</div>
      </div>
    );
  }// render

}

PageVerifyColor2.defaultProps = {
  color:null,
  goBack:null,
  goNext:null,
};

export default PageVerifyColor2;
