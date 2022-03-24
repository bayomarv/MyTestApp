import React from 'react';
import Logo from '../logo.png';

function Nav () {  
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>  
    </nav>
  );
};

export default Nav;