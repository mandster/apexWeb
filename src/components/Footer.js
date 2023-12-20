import React from "react";
import logo from "../image/Apex_logo_23.png";
import { Link } from "react-router-dom"; 
import "../styles.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </div>
      </Link>
      <div className="contact-column">< Contact /></div>
      <div className="quick-links-column">{/* Quick links */}</div>
      <div className="follow-us-column">
        {/* Social media links or other ways to follow */}
      </div>
    </div>
  );
};

export default Footer;
