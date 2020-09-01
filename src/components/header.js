import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="nav-wrapper indigo darken-4">
       <div className="container">
          <a href="/" className="brand-logo">PokeTimes</a>
          <ul className="right">
              {/* change all a to LINK so that it will not reload it again but if you change them to NAVLINK then it will add a active class to it--so pretty good thing    */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
       </div>   
    </nav>
)
export default Header;