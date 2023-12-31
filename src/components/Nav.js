import React, { useState } from 'react';
import { Dropdown, Navbar, Nav as BootstrapNav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../image/Apex_logo_23.png";


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setIsSubMenuOpen(false); // Close the submenu when leaving the main dropdown
  };

  const handleSubMenuEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <Navbar className='my-nav'  expand="md">
      <Navbar.Brand>
        <Link className="no-decor" to="/">
        <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <BootstrapNav className="mr-auto my-2 my-md-0">
          <button className="btn">
            <Link className="no-decor" to="/">
              Home
            </Link>
          </button>
          <button className="btn">
            <Link className="no-decor" to="/About">
              About us
            </Link>
          </button>

          <Dropdown
            show={isDropdownOpen}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Dropdown.Toggle variant="" id="dropdown-basic" className='main-logo'>
            <Link className="no-decor" to="/Products">
              Products
              </Link>
            </Dropdown.Toggle>

            <Dropdown.Menu
              onMouseEnter={handleSubMenuEnter}
              onMouseLeave={handleSubMenuLeave}
            >
              <Dropdown.Item href="/Product/Starters">Motor Starters</Dropdown.Item>
              <Dropdown.Item href="/Product/ControlSwitches">L.T. Control Switches</Dropdown.Item>
              <Dropdown.Item href="/Product/SubmersiblePanels">Submersible Panels</Dropdown.Item>
              <Dropdown.Item href="/Product/Limit Switches">Limit Switches</Dropdown.Item>
              <Dropdown.Item href="/Product/Contactors">Air Break Contactors</Dropdown.Item>
              <Dropdown.Item href="/Product/PlugsSockets">Plugs and Sockets</Dropdown.Item>
              <Dropdown.Item href="/Product/PanelAccessories">Panel Accessories</Dropdown.Item>
            </Dropdown.Menu>

            {/* Submenu for Motor Starters */}
            <Dropdown.Menu show={isSubMenuOpen}>
              <Dropdown.Item href="/Product/DirectOnlineStarters">Direct Online Starters</Dropdown.Item>
              <Dropdown.Item href="/Product/StarDeltaStarters">Star-Delta Starters</Dropdown.Item>
              <Dropdown.Item href="/Product/ReverseForwardStarters">Forward-Reverse Starters</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="btn ml-2">
            <Link className="no-decor" to="/Contact">
              Contact Us
            </Link>
          </button>
        </BootstrapNav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
