import React, { Component } from 'react';

import '../App.css';

class PageColorPick1 extends Component {

  render() {
    return (
      <div className="centered">
        <h1 style={{whiteSpace:'nowrap', fontWeight:'normal'}}>COLOR Pick 1</h1>
      </div>
    );
  }// render

}

PageColorPick1.defaultProps = {
  clickNext:null
};

export default PageColorPick1;
