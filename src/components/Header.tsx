import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo-suffolk.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-link">
          <div className="logo">
            <div className="logo-icon">
              <img src={logo} alt="Suffolk Supplements" width="40" height="40" />
            </div>
            <div className="logo-text">
              <div className="brand-name">SUFFOLK</div>
              <div className="brand-subtitle">SUPPLEMENTS</div>
            </div>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/products">Products</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
