import React, {Component} from 'react';
import openbotlogo from '../images/svg/logo_short_black.svg';

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <a href="../">
          <img src={openbotlogo} id="banner-img" alt="Openbot logo" onClick={this.scrollToTop}/>
        </a>
      </div>
      );
  }
}

export default Navbar;
