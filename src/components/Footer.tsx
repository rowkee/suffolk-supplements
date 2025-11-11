import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">SUFFOLK SUPPLEMENTS</h3>
            <p className="footer-tagline">
              Premium supplements inspired by coastal living
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <nav className="footer-nav">
              <Link to="/returns">Returns Policy</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                {FaFacebook({ size: 24 })}
              </a>
              <a href="#" aria-label="Instagram">
                {FaInstagram({ size: 24 })}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Suffolk Supplements. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
