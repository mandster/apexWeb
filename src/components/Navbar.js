import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import logo from "../image/Apex_logo_23.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top " style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid" >
      <Link to="/" className="navbar-brand">
          <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{ backgroundColor: "#474747"}}  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown" >
          <ul className="navbar-nav ms-auto dark-bg centered-text"  style={{ width:"100%", right:"0"}}>
            <li className="nav-item" >
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/Product" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-submenu" >
                  <a className="dropdown-item dropdown-toggle" href="/Product/Starters/">Motor Starters</a>
                  <ul className="dropdown-menu " >
                    <li><a className="dropdown-item" href="/Product/Starters/DirectOnlineStarters">Direct Online Motor Starters</a></li>
                    <li><a className="dropdown-item" href="/Product/Starters/StarDeltaStarters">Star Delta Motor Starters</a></li>
                    <li><a className="dropdown-item" href="/Product/Starters/ReverseForwardStarters">Reverse Forward Starters</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu " >
                  <a className="dropdown-item dropdown-toggle" href="/Product/ControlSwitches">L.T. Control switches</a>
                  <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="/Product/ControlSwitches/ReverseForwardSwitches">Reverse Forward Switches</a></li>
                    <li><a className="dropdown-item" href="/Product/ControlSwitches/ChangeOverSwitches">Change-over Switches</a></li>
                    <li><a className="dropdown-item" href="/Product/ControlSwitches/OnOffSwitches">On/Off Switches</a></li>
                    <li><a className="dropdown-item" href="/Product/ControlSwitches/StarDeltaSwitches">Star-Delta Switches</a></li>
                  </ul>
                </li>
                <li className="new-color"><a className="dropdown-item" href="/Product/SubmersiblePanels">Submersible Panels</a></li>
                <li><a className="dropdown-item" href="/Product/LimitSWitches">Limit Switches</a></li>
                <li><a className="dropdown-item" href="/Product/PlugSockets">Plug Sockets</a></li>
                <li><a className="dropdown-item" href="/Product/PanelAccessories">Panel Accessories</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
