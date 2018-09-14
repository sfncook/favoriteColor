import React, { Component } from 'react';

import TextLink from "./TextLink";
import '../App.css';

class PageWelcome extends Component {

  render() {
    return (
      <div className="centered">
        <h1 style={{whiteSpace:'nowrap', fontWeight:'normal'}}>WHAT IS YOUR FAVORITE COLOR?</h1>
        <p style={{textAlign:'justify'}}>THIS WEBSITE IS A NON-COMMERCIAL EXPLORATION OF HOW PEOPLE RESPOND TO THE QUESTION: WHAT IS YOUR FAVORITE COLOR? AS A PARTICIPANT YOU WILL BE ASKED THE QUESTION 2 WAYS. THE RESULTS OF ALL RESPONSES WILL BE COMPILED AND AVAIL- ABLE FOR VIEWING, EITHER AFTER RESPONDING OR HERE. YOU WILL ALSO BE ASKED 3 SIMPLE QUESTIONS ABOUT YOURSELF. THE RESPONSES TO THESE QUESTIONS WILL BE USED TO ORGANIZE THE DATA.YOUR PARTICIPATION AND RESPONSES IN THIS PROJECT ARE ANONMOUS.</p>
        <TextLink text={'NEXT'} click={this.clickNext.bind(this)}/>
      </div>
    );
  }// render

  clickNext(e) {
    e.preventDefault();
    this.props.nextWelcome();
  }

}

PageWelcome.defaultProps = {
  nextWelcome:null
};

export default PageWelcome;
