import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-letter">L</span>
          <span className="logo-letter">A</span>
          <span className="logo-letter">P</span>
        </div>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">TESTIMONIALS</a>
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;