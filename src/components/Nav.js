import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <div className="dropdown">
      <Link to="/ProductRow">Products</Link>
      <div className="dropdown-content">
        <Link to="/components/products/Starters">Motor Starters</Link>
        <Link to="/components/products/ControlSwitches">L.T. Control Switches</Link>
        <Link to="/components/products/SubmersiblePanels">Submersible Panels</Link>
        <Link to="/components/products/Accessories">Accessories</Link>
      </div>
    </div>
    <Link to="/Contact">Contact Us</Link>
  </nav>

  )
}

export default Nav
