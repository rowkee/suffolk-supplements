import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-tagline">Fresh from the Suffolk Coast</div>
            <h1 className="hero-title">
              Wellness Inspired by the
              <br />
              <span className="highlight">Sea</span>
            </h1>
            <p className="hero-description">
              Premium supplements crafted with the vitality of coastal living. Pure,
              natural, and powered by the elements.
            </p>
            <button className="cta-button">Learn Our Story</button>
          </div>
          <div className="hero-visual">
            <div className="logo-large">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                <circle cx="150" cy="150" r="140" fill="#4a90a4" stroke="#2c5f72" strokeWidth="4"/>
                <circle cx="150" cy="150" r="130" fill="none" stroke="#5ba3b8" strokeWidth="2"/>

                <path d="M50 130 Q80 110, 110 130 T170 130 T230 130" stroke="#fff" strokeWidth="4" fill="none"/>
                <path d="M40 160 Q70 140, 100 160 T160 160 T220 160" stroke="#fff" strokeWidth="4" fill="none"/>
                <path d="M50 190 Q80 170, 110 190 T170 190 T230 190" stroke="#fff" strokeWidth="4" fill="none"/>
                <path d="M60 220 Q90 200, 120 220 T180 220 T240 220" stroke="#fff" strokeWidth="3" fill="none"/>

                <circle cx="150" cy="70" r="20" fill="#fff"/>
                <path d="M130 60 L150 45 L170 60" stroke="#fff" strokeWidth="4" fill="none"/>
                <path d="M135 65 L150 50 L165 65" stroke="#fff" strokeWidth="3" fill="none"/>
                <path d="M140 70 L150 55 L160 70" stroke="#fff" strokeWidth="2" fill="none"/>

                <rect x="100" y="240" width="20" height="20" fill="#fff" rx="2"/>
                <rect x="130" y="235" width="20" height="25" fill="#fff" rx="2"/>
                <rect x="160" y="240" width="20" height="20" fill="#fff" rx="2"/>
                <rect x="190" y="235" width="20" height="25" fill="#fff" rx="2"/>
              </svg>
            </div>
            <div className="brand-text-large">
              <div className="brand-name-large">SUFFOLK</div>
              <div className="brand-subtitle-large">SUPPLEMENT CO.</div>
            </div>
          </div>
        </div>
        <div className="trust-indicators">
          <div className="indicator">
            <div className="indicator-value">100%</div>
            <div className="indicator-label">Natural</div>
          </div>
          <div className="indicator">
            <div className="indicator-value">5k+</div>
            <div className="indicator-label">Happy Customers</div>
          </div>
          <div className="indicator">
            <div className="indicator-value">UK</div>
            <div className="indicator-label">Made</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;