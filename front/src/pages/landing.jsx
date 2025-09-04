
import React from "react";
import "../styles/landing.css";
import landingImage from "../assets/landing.png";
const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h1>Sign Language and Audio Conversion</h1>
          <p>
            Our system bridges the gap between the deaf and hearing communities
            by converting sign language into text/audio and vice versa. With
            support for multiple sign languages, natural language processing,
            and translations, communication becomes seamless and inclusive.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
        <div className="hero-right">
          <img src={landingImage} alt="Landing" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>Real-Time Sign Detection</h3>
          <p>Detect and translate sign gestures instantly using webcam feed.</p>
        </div>
        <div className="feature-card">
          <h3>Multi-Language Support</h3>
          <p>
            Supports ISL, ASL, and BSL along with translations for smoother
            communication.
          </p>
        </div>
        <div className="feature-card">
          <h3>Text to Sign</h3>
          <p>
            Convert typed sentences into sign animations for better accessibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
