import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="hero" aria-label="Hero section with coastal background">
      {/* Image Background Layer */}
      <div className="hero-image-container">
        <img
          src="/images/hero-background.jpg"
          alt="Walberswick Beach coastal scenery"
          className="hero-image"
        />
      </div>

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
              <button
                className="cta-button"
                onClick={() => navigate("/our-story")}
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
