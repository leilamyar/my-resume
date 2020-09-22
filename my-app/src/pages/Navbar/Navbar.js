import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className= "nav-wrapper purple darken-4">
      <div className="container">
      {/* eslint-disable-next-line */}
        <Link to= "/">
          <a className="brand-logo">Resu-me</a>
        </Link>
        <ul className="right">
          <li><NavLink to= "/">Home</NavLink></li>
          <li><NavLink to= "/about-me">AboutMe</NavLink></li>
          <li><NavLink to= "/about-this">AboutThis</NavLink></li>
          <li><NavLink to= "/chrono-view">ChronoView</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
