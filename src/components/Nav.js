import React from "react";
import "./Nav.css";
import Logo from "../assets/puff-logo.jpeg";

const MyNavbar = () => {
  return (
    <div className='nav-container'>
      <img src={Logo} className='nav-logo' alt='puff n stuff' />
      <div className='nav-links'>
        <a href='#Home' className='link'>
          Home
        </a>
        <a href='#About' className='link'>
          About
        </a>
        <a href='#Contact' className='link'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default MyNavbar;
