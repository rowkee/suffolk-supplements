import React from "react";
import logo from "../logo-suffolk.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Suffolk Supplements" width="40" height="40" />
          </div>
          <div className="logo-text">
            <div className="brand-name">SUFFOLK</div>
            <div className="brand-subtitle">SUPPLEMENTS</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#products">Products</a>
          <a href="#story">Our Story</a>
          <a href="#benefits">Benefits</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
