import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>© Bitwise &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
