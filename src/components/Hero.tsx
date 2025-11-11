import React, { useEffect, useState } from "react";
import logo from "../logo-suffolk.png";

const Hero: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="hero" aria-label="Hero section with coastal background">
      {/* Video Background Layer */}
      {!prefersReducedMotion && (
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Dark Overlay for Text Readability */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content Layer */}
      <div className="hero-content-wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Wellness Inspired by the <span className="highlight">Sea</span>{" "}
                and <span className="highlight-land">Land</span>
              </h1>
              <p className="hero-description">
                Premium supplements crafted with the vitality of coastal living.
                Pure, natural, and powered by the elements.
              </p>
              <button className="cta-button">Learn Our Story</button>
            </div>
            {/* <div className="hero-visual">
              <div className="logo-large">
                <img
                  src={logo}
                  alt="Suffolk Supplements"
                  width="300"
                  height="300"
                />
              </div>
            </div> */}
          </div>
          {/* <div className="trust-indicators">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
