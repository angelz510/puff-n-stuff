import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/puff-logo.jpeg";

const MyNavbar = () => {
  return (
    <div className="nav-container">
      <img src={Logo} className="nav-logo" alt="puff n stuff" />
      <div className="nav-links">
        <div className="link">Home</div>
        <div className="link">About</div>
        <div className="link">Contact</div>
      </div>
    </div>
  );
};

export default MyNavbar;
