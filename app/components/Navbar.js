import React from 'react';
import { Link } from 'react-router';
const Navbar = props => {
  return(
    <div className="navbar">
      <ul className="links">
        <li><Link to='/'>Home</Link></li>
        <li><a href='https://github.com/amandabeiner' target="_blank">GitHub</a></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/pugs'>Pugs</Link></li>
      </ul>
      {props.children}
    </div>
  );
}

export default Navbar;
