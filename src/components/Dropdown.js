import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './MenuItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown-menu ${dropdown ? 'show' : ''} ${dropdownClass}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  submenus: PropTypes.array.isRequired,
  dropdown: PropTypes.bool.isRequired,
  depthLevel: PropTypes.number.isRequired,
};

export default Dropdown;
