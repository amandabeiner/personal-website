import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

const Navbar = props => {

  configureAnchors({ keepLastAnchorHash: true });


  return(
    <div className="navbar">
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#pugs">Pugs</a></li>
        <li><a href='https://github.com/amandabeiner' target="_blank">GitHub</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
