import React from "react";
import logo from "../image/Apex_logo_23.png";
import { Link } from "react-router-dom";
import "../styles.css";
import ContactCard from "./ContactCard";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
          </div>
        </Link>
        <div className="contact-column">
          <ContactCard />
        </div>
        <div className="quick-links-column"></div>
        <div className="follow-us-column">
          <SocialIcons />
        </div>
      </div>
      <div className="centered-text medium-text footer-bed">
        Copyright @2023 Apex Electricals
      </div>
    </>
  );
};

export default Footer;
