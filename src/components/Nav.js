import React from "react";
import { Link } from "react-router-dom";

import "../style/Nav.css";
//Link의 to 속성의 값에 작성된 문자열은 Route의 path 속성의 문자열과 연결된다.

const Nav = () => {
  return (
    <div>
      <header>
        <div className='center'>
          <Link to='/'>
            <h3>LOGO</h3>
          </Link>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            <Link to='/about'>
              <li>ABOUT</li>
            </Link>
            <Link to='/movie'>
              <li>MOVIE</li>
            </Link>
            {/* <li>HOME</li>
            <li>ABOUT</li>
            <li>MOVIE</li> */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Nav;
