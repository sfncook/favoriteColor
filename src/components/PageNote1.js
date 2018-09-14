import React, { Component } from 'react';

import '../App.css';
import TextLink from "./TextLink";

class PageNote1 extends Component {

  render() {
    return (
      <div className="centered">
        <p style={{textAlign:'justify'}}>NOW LET’S GET MORE SPECIFIC. THE PREVIOUS QUESTION ASKED YOU TO IDENTIFY YOUR COLOR WITH A WRITTEN WORD. ON THE NEXT PAGE YOU WILL SEE A SPEC- TRUM OF 2,000 COLORS. YOU WILL BE ABLE TO ZOOM IN TO SPECIFIC COLORS AND ONCE YOU FEEL YOU HAVE FOUND ONE YOU CAN CALL YOUR FAVORITE, YOU CAN CLICK ON IT AND IT WILL BE RECORDED.</p>
        <TextLink text={'NEXT'} click={this.props.goNext} />
      </div>
    );
  }// render

}

PageNote1.defaultProps = {
  goNext:null,
};

export default PageNote1;
