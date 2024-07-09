import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import logo from "../image/Apex_logo_23.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleNavLinkClick = () => {
    const navCollapse = document.getElementById('navbarNavDropdown');
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" style={{ backgroundColor: "#474747" }} data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto dark-bg centered-text" style={{ width: "100%", right: "0" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/Products">
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/Product/Starters/" onClick={handleNavLinkClick}>Motor Starters</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Product/Starters/DirectOnlineStarters" onClick={handleNavLinkClick}>Direct Online Motor Starters</Link></li>
                    <li><Link className="dropdown-item" to="/Product/Starters/StarDeltaStarters" onClick={handleNavLinkClick}>Star Delta Motor Starters</Link></li>
                    <li><Link className="dropdown-item" to="/Product/Starters/ReverseForwardStarters" onClick={handleNavLinkClick}>Reverse Forward Starters</Link></li>
                  </ul>
                </li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/ControlSwitches" onClick={handleNavLinkClick}>L.T. Control Switches</Link></li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/Contactors" onClick={handleNavLinkClick}>Air Break Contactors</Link></li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/SubmersiblePanels" onClick={handleNavLinkClick}>Submersible Panels</Link></li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/LimitSWitches" onClick={handleNavLinkClick}>Limit Switches</Link></li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/PlugSockets" onClick={handleNavLinkClick}>Plug Sockets</Link></li>
                <li className="dropdown-submenu"><Link className="dropdown-item" to="/Product/PanelAccessories" onClick={handleNavLinkClick}>Panel Accessories</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={handleNavLinkClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
