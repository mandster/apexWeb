import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="menu">
    <ul className="menu-list">
      <li className="menu-item">
        <a href="./">Home</a>
      </li>
      <li className="menu-item">
        <a href="./About">About</a>
      </li>
      <li className="menu-item dropdown">
        <a href="./Products">Products</a>
        <ul className="dropdown-content">

          <li className="dropdown-item sub-dropdown">
            <a href="Product/Starters/">Motor Starters</a>
            <ul className="sub-dropdown-content">
              <li className="dropdown-item">
              <a href="Product/Starters/DirectOnlineStarters">Direct Online Motor Starters</a>
              </li>
              <li className="dropdown-item">
              <a href="Product/Starters/StarDeltaStarters">Star Delta Motor Starters</a>
              </li>
              <li className="dropdown-item">
              <a href="Product/Starters/ReverseForwardStarters">Reverse Forward Starters</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-item  sub-dropdown">
            <a href="#product1">L.T. Control switches</a>
            <ul className="sub-dropdown-content">
              <li className="dropdown-item">
              <a href="Product/ControlSwitches/ReverseForwardSwitches">Reverse Forward Switches</a>
              </li>
              <li className="dropdown-item">
              <a href="Product/ControlSwitches/ReverseForwardSwitches">Change-over Switches</a>
              </li>
              <li className="dropdown-item">
              <a href="Product/ControlSwitches/OnOffSwitches">On/Off Switches</a>
              </li>
              <li className="dropdown-item">
              <a href="Product/ControlSwitches/StarDeltaSwitches">Star-Delta Switches</a>
              </li>
            </ul>
          </li>
          <li className="dropdown-item ">
          <a href="Product/SubmersiblePanels">Submersible Panels</a>
            </li>
            <li className="dropdown-item ">
          <a href="OtherProducts/#LimitSWitches">Limit Switches</a>
            </li>
            <li className="dropdown-item ">
          <a href="Product/PlugSockets">Plug Sockets</a>
            </li>
            <li className="dropdown-item ">
          <a href="Product/PanelAccessories">Panel Accessories</a>
            </li>
        </ul>
      </li>
      <li className="menu-item">
        <a href="#contact">Contact Us</a>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
