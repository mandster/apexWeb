import React from 'react';
import Navbar from './Navbar';
import logo from "../image/Apex_logo_23.png";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <div className="header-menu">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
