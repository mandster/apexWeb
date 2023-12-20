import React from "react";
import logo from "../image/Apex_logo_23.png";
import "../styles.css";
import SocialIcons from "./SocialIcons";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row-container">
        <Link to="/Careers" className="link">
          Careers
        </Link>
        <Link to="/Contact" className="link">
          Contact us
        </Link>
      </div>
      <div className="header">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
          </div>
        </Link>
        
       < Nav />
      </div>
      <div className="nav-bottom"></div>
    </>
  );
};

export default Header;
