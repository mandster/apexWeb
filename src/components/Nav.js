import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';


const Nav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleDropdownLeave = () => {
      setIsDropdownOpen(false);
    };
  
    const handleSubmenuEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleSubmenuLeave = () => {
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="d-flex justify-content-center mt-5 basic">
        <button className="btn btn-primary mr-2">Left Button 1</button>
        <button className="btn btn-primary mr-2">Left Button 2</button>
  
        <Dropdown
          show={isDropdownOpen}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Dropdown button
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown
              onMouseEnter={handleSubmenuEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Dropdown.Toggle variant="secondary">Submenu &raquo;</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Submenu item 1</Dropdown.Item>
                <Dropdown.Item href="#">Submenu item 2</Dropdown.Item>
                <Dropdown
                  onMouseEnter={handleSubmenuEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Dropdown.Toggle variant="secondary">Submenu item 3 &raquo;</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Multi level 1</Dropdown.Item>
                    <Dropdown.Item href="#">Multi level 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item href="#">Submenu item 4</Dropdown.Item>
                <Dropdown.Item href="#">Submenu item 5</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Menu>
        </Dropdown>
  
        <button className="btn btn-primary ml-2">Right Button</button>
      </div>
    );
  };
  
  

export default Nav;
