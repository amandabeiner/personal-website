import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

const Navbar = props => {

  configureAnchors({ keepLastAnchorHash: true });


  return(
    <div className="navbar">
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact-section">Contact</a></li>
        <li><a href="#pug-section">Pugs</a></li>
        <li><a href='https://github.com/amandabeiner' target="_blank">GitHub</a></li>
      </ul>
      {props.children}
    </div>
  );
}

export default Navbar;
