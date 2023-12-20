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
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="APEX ELECTRICALS" className="footer-logo" />
          </Link>
        </div>
        <div className="quick-links-column">
          <h2>Quick links</h2>
          <Link to="/components/products/Starters">Motor Starters</Link>{" "}
          <br></br>
          <Link to="/components/products/ControlSwitches">
            L.T. Control Switches
          </Link>
          <br></br>
          <Link to="/components/products/SubmersiblePanels">
            Submersible Panels
          </Link>
          <br></br>
          <Link to="/components/products/Accessories">Accessories</Link>
        </div>
        <div className="follow-us-column">
          <ContactCard />
        </div>

        <div className="follow-us-column">
          <h2>Visit us on</h2>
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
