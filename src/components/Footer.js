import React from "react";
import logo from "../image/LOGO.jpg";

import "../styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </div>
      </Link>
      <div className="contact-column">{/* Contact information */}</div>
      <div className="quick-links-column">{/* Quick links */}</div>
      <div className="follow-us-column">
        {/* Social media links or other ways to follow */}
      </div>
    </div>
  );
};

export default Footer;
