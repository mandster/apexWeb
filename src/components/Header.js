import React from "react";
const Header = () => {
  return (
    <div className="header">
      <img
        src="path/to/logo.png"
        alt="APEX ELECTRICALS Logo"
        className="logo"
      />
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </div>
  );
};
export default Header;
