import React from "react";
import logo from "../image/Apex_logo_23.png";
import "../styles.css";
import SocialIcons from "./SocialIcons";
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
        <Link to="#" className="link">
          Link 3
        </Link>
      </div>
      <div className="header">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
          </div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <div className="dropdown">
            <Link to="/Products">Products</Link>
            <div className="dropdown-content">
              <Link to="/components/products/category1">Category 1</Link>
              <Link to="/components/products/category2">Category 2</Link>
              <Link to="/components/products/category3">Category 3</Link>
            </div>
          </div>
          <Link to="/Contact">Contact Us</Link>
        </nav>
        <div>
          <SocialIcons />
        </div>
      </div>
      <div className="nav-bottom"></div>
    </>
  );
};

export default Header;
