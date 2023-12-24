import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownEnter1 = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave1 = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="d-flex justify-content-center mt-5 basic">
      <button className="btn mr-4">
      <Link className="no-decor" to="/">
        Home
        </Link>
        </button>
      <button className="btn ml-4">
      <Link className="no-decor" to="/About">
       
        
        About us
        </Link>
        
        </button>
      <Dropdown
        show={isDropdownOpen}
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleDropdownLeave}
      >
        <Dropdown.Toggle variant="" id="dropdown-basic">
          Products
        </Dropdown.Toggle>

        <Dropdown.Menu
          onMouseEnter={handleDropdownEnter1}
          onMouseLeave={handleDropdownLeave1}
        >
          <Dropdown.Item href="/Product/Starters">
            Motor Starters
            <Dropdown.Menu>
              <Dropdown.Item href="/Product/Starters/DirectOnlineStarters">Direct Online Starters</Dropdown.Item>
              <Dropdown.Item href="/Product/Starters/StarDeltaStarters">Star-Delta Starters</Dropdown.Item>
              <Dropdown.Item href="/Product/Starters/ReverseForwardStarters">Forward-Reverse Starters</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item href="/Product/ControlSwitches">L.T. Control Switches</Dropdown.Item>
          <Dropdown.Item href="/Product/SubmersiblePanels">Submersible Panels</Dropdown.Item>
          <Dropdown.Item href="/Product/Limit Switches">Limit Switches</Dropdown.Item>
          <Dropdown.Item href="/Product/Contactors">Air Break Contactors</Dropdown.Item>
          <Dropdown.Item href="/Product/PlugsSockets">Plugs and Sockets</Dropdown.Item>
          <Dropdown.Item href="/Product/PanelAccessories">Panel Accessories</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button className="btn ml-2">
        <Link className="no-decor" to="/Contact">
          Contact Us
        </Link>
      </button>
    </div>
  );
};

export default Nav;
