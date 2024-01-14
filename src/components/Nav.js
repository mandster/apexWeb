import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../image/Apex_logo_23.png";


function Navi() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  
    const handleDropdownEnter = () => {
      setIsDropdownOpen(true);
    };

    const handleSubDropdownEnter = () => {
      setIsSubDropdownOpen(true);
    };
  
    const handleSubDropdownLeave = () => {
      setIsSubDropdownOpen(false);
    };
    const handleDropdownLeave = () => {
      setIsDropdownOpen(false);
    };
    return (
      <div>
        <Navbar className='my-nav' expand="md">
          <Navbar.Brand>
            <Link className="no-decor" to="/">
              <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
  
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-md-0">
              <Nav.Link>
                <Link className="no-decor" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="no-decor" to="/About">
                  About us
                </Link>
              </Nav.Link>
  
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
  
                <Dropdown.Menu>
                  <Dropdown.Item href="/Product/Starters"  variant="" id="dropdown-basic"
                 >Motor Starters</Dropdown.Item>
                  {/* Submenu for Motor Starters */}
                  <Dropdown.Menu id="sub-drop"  style={{ top: '0', left: '100%' }}>
                    <Dropdown.Item href="/Product/DirectOnlineStarters">Direct Online Starters</Dropdown.Item>
                  </Dropdown.Menu>
                  <Dropdown.Item href="/Product/ControlSwitches">L.T. Control Switches</Dropdown.Item>
                  <Dropdown.Item href="/Product/SubmersiblePanels">Submersible Panels</Dropdown.Item>
                  <Dropdown.Item href="/Product/Limit Switches">Limit Switches</Dropdown.Item>
                  <Dropdown.Item href="/Product/Contactors">Air Break Contactors</Dropdown.Item>
                  <Dropdown.Item href="/Product/PlugsSockets">Plugs and Sockets</Dropdown.Item>
                  <Dropdown.Item href="/Product/PanelAccessories">Panel Accessories</Dropdown.Item>
                </Dropdown.Menu>
  
              </Dropdown>
  
              <Nav.Link>
                <Link className="no-decor" to="/Contact">
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };

export default Navi;