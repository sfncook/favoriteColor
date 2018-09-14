import React, { Component } from 'react';

import { PageState } from '../utils.js';
import PageWelcome from "./PageWelcome";
import PageColorPick1 from "./PageColorPick1";
import PageVerifyColor from "./PageVerifyColor";
import PageFavColor1 from "./PageFavColor1";
import PageNote1 from "./PageNote1";
import PageColorPick2 from "./PageColorPick2";

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
        page = <PageVerifyColor colorIndex={this.state.colorIndex} goBack={this.gotoColorPick1.bind(this)} goNext={this.gotoFavColor1.bind(this)} />;
        break;
      case PageState.FAV_COLOR_1:
        page = <PageFavColor1 goNext={this.gotoNote1.bind(this)} />;
        break;
      case PageState.NOTE_1:
        page = <PageNote1 goNext={this.gotoColorPick2.bind(this)} />;
        break;
      case PageState.COLOR_PICK_2:
        page = <PageColorPick2 />;
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
    this.setState({pageState:PageState.COLOR_PICK_1});
  }

  gotoColorPick2() {
    this.setState({pageState:PageState.COLOR_PICK_2});
  }

  pickColor(colorIndex) {
    this.setState({colorIndex:colorIndex}, ()=>{
      this.setState({pageState:PageState.VERIFY_COLOR});
    });
  }

  gotoFavColor1() {
    this.setState({pageState:PageState.FAV_COLOR_1});
  }

  gotoNote1() {
    this.setState({pageState:PageState.NOTE_1});
  }

}

export default MainPage;
