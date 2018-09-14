import React, { Component } from 'react';

import { PageState } from '../utils.js';
import PageWelcome from "./PageWelcome";
import PageColorPick1 from "./PageColorPick1";

import '../App.css';

class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageState: PageState.WELCOME,
    };
  }

  render() {
    console.log('render');
    let page;
    switch (this.state.pageState) {
      case PageState.WELCOME:
        page = <PageWelcome clickNext={this.setPageState_ColorPick1}/>;
        break;
      case PageState.COLOR_PICK_1:
        page = <PageColorPick1 clickNext={this.setPageState_ColorPick1}/>;
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

  setPageState_ColorPick1(e) {
    e.preventDefault();
    console.log('click');
    this.setState({pageState:PageState.COLOR_PICK_1});
  }

}

export default MainPage;
