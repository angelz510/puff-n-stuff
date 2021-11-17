import React from "react";
import "./Nav.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../assets/puff-logo.jpeg";

const MyNavbar = () => {
  return (
    <Navbar
      expand="md"
      bg="success"
      variant="dark"
      className="animate-navbar nav-theme d-flex justify-content-space-between"
    >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="65"
          height="65"
          className="brand-logo"
          alt="puff n stuff logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-light" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="text-light" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
