import React from 'react';
import {Link} from "react-router-dom";
import './Header.scss';
import logo from '../../../images/logo1.png';

const Header = () => {
 
  return (
    <header>
      <div id="myPage">
        <Link to="/mypage"><span id="icon_mypage"></span></Link>
      </div>
      <Link to="/"><img id="logo" src={logo} alt="Tech On Knowledge" /></Link>
    </header>
  )
}

export default Header;