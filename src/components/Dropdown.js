import MenuItems from './MenuItems';

import PropTypes from 'prop-types';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      className={`dropdown ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu}
          key={index}
          depthLevel={depthLevel}
        />
      ))}
    </ul>
  );
};


Dropdown.propTypes = {
  submenus: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  dropdown: PropTypes.bool.isRequired,
  depthLevel: PropTypes.number.isRequired,
};

export default Dropdown;
