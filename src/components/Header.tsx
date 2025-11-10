import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" fill="#4a90a4" stroke="#2c5f72" strokeWidth="2"/>
              <path d="M25 45 Q35 40, 45 45 T65 45 T85 45" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M20 55 Q30 50, 40 55 T60 55 T80 55" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M25 65 Q35 60, 45 65 T65 65 T85 65" stroke="#fff" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="25" r="8" fill="#fff"/>
              <path d="M42 20 L50 15 L58 20" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M45 22 L50 17 L55 22" stroke="#fff" strokeWidth="2" fill="none"/>
              <rect x="35" y="70" width="8" height="8" fill="#fff"/>
              <rect x="45" y="68" width="8" height="10" fill="#fff"/>
              <rect x="55" y="70" width="8" height="8" fill="#fff"/>
            </svg>
          </div>
          <div className="logo-text">
            <div className="brand-name">SUFFOLK</div>
            <div className="brand-subtitle">SUPPLEMENT CO.</div>
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