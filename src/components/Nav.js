import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../assets/puff-logo-transparent.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <div>
        <img src={Logo} className="logo" alt="Puff N' Stuff" />
      </div>
      <div className="nav-links">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/about"}>
          About
        </Link>
        <Link className="nav-link" to={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
