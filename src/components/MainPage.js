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
    let page;
    switch (this.state.pageState) {
      case PageState.WELCOME:
        page = <PageWelcome nextWelcome={this.nextWelcome.bind(this)}/>;
        break;
      case PageState.COLOR_PICK_1:
        page = <PageColorPick1 pickColor={this.pickColor.bind(this)}/>;
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

  nextWelcome() {
    console.log('click');
    this.setState({pageState:PageState.COLOR_PICK_1});
  }

  pickColor(newColor) {
    console.log('click pickColor newColor:',newColor);
  }

}

export default MainPage;
