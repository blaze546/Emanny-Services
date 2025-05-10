import React from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper mb-0">
      <div className="position-relative w-100">
        <img
          src="/pexels-bidvine-517980-1249611.jpg"
          alt="Carpenter at work"
          className="img-fluid w-100 hero-image"
        />
        <div className="hero-content text-white position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center p-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="text-center">
            <h1 className="hero-heading display-4">Expert Home Repair Services in Boston</h1>
            <p className="lead">
              Bringing precision and craftsmanship to every home improvement project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

