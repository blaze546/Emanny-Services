import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './CarouselSection.css';

const CarouselSection = () => {
  return (
    <div className="mb-5">
      <Card className="shadow-lg p-4 mb-4">
        {/* Carousel */}
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="/kitchenbirch.jpeg"
              alt="Custom Kitchen Cabinets"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Custom Kitchen Cabinets</h3>
              <p>Transform your kitchen with beautiful custom cabinetry built to last.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="/Basement.jpeg"
              alt="Home Renovation"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Home Renovation</h3>
              <p>Modernize your basement with professional renovations that fit your style.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="WCassing.JPG"
              alt="Window Casing"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Window Casing</h3>
              <p>Elegant and durable window casing solutions to enhance your home's aesthetics.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="lowellstbathroom.jpg"
              alt="Bathroom Renovation"
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Elegant Bathroom Upgrades</h3>
              <p>Elevate your bathroom with stylish, functional designs built for comfort and luxury.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Bottom Description */}
        <div className="text-center mt-4">
          <h4 className="fw-bold text-dark">Our Expertise In Home Repair</h4>
          <p className="fs-5 text-muted px-2">
          With over 7 years of experience, Emanny Services offers bespoke home renovations, and expert carpentry tailored to your vision. From elegant kitchen remodels to complete home transformations, we deliver exceptional craftsmanship, and a seamless client experience.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CarouselSection;
