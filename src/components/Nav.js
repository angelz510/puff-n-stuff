import React from "react";
import "./Nav.css";
import Logo from "../assets/puff-logo.jpeg";

const MyNavbar = () => {
  return (
    <div className="nav-container">
      <img src={Logo} className="nav-logo" alt="puff n stuff" />
      <div className="nav-links">
        <div className="link">Home</div>
        <div className="link">About</div>
        <button className="link contact">Contact</button>
      </div>
    </div>
  );
};

export default MyNavbar;
