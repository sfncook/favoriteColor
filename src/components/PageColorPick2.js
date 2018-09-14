import React, { Component } from 'react';

import '../App.css';

class PageColorPick2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      color: '#ff0000',
    };
  }

  render() {
    return (
      <div className="centered">
        <h1>NEXT COLOR</h1>
        <input type="color" id="html5colorpicker" value={this.state.color} onChange={this.chooseColor.bind(this)} />
      </div>
    );
  }// render

  chooseColor() {
    const color = document.getElementById('html5colorpicker').value;
    this.setState({color:color});
  }
}

PageColorPick2.defaultProps = {
  pickColor:null
};

export default PageColorPick2;
