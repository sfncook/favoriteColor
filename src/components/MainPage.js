import React, { Component } from 'react';

import { PageState } from '../utils.js';
import PageWelcome from "./PageWelcome";
import PageColorPick1 from "./PageColorPick1";
import PageVerifyColor from "./PageVerifyColor";

import '../App.css';

class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageState: PageState.WELCOME,
      colorIndex: -1,
    };
  }

  render() {
    let page;
    switch (this.state.pageState) {
      case PageState.WELCOME:
        page = <PageWelcome nextWelcome={this.gotoColorPick1.bind(this)}/>;
        break;
      case PageState.COLOR_PICK_1:
        page = <PageColorPick1 pickColor={this.pickColor.bind(this)}/>;
        break;
      case PageState.VERIFY_COLOR:
        page = <PageVerifyColor colorIndex={this.state.colorIndex} goBack={this.gotoColorPick1.bind(this)}/>;
        break;
      default:
        break;
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }// render

  gotoColorPick1() {
    console.log('click');
    this.setState({pageState:PageState.COLOR_PICK_1});
  }

  pickColor(colorIndex) {
    this.setState({colorIndex:colorIndex}, ()=>{
      this.setState({pageState:PageState.VERIFY_COLOR});
    });
  }

}

export default MainPage;
