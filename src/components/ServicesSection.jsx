import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ServicesSectionCard.css';

// Image-based service cards
const services = [
  {
    title: "Kitchen Remodels",
    description: "Custom cabinets, countertops, and full kitchen redesigns.",
    image: "/kitchen.jpg",
  },
  {
    title: "Bathroom Renovations",
    description: "From simple upgrades to full bathroom transformations.",
    image: "/bathroom.jpg",
  },
  {
    title: "Stair Replacement",
    description: "Strong and stylish stair builds to elevate your home.",
    image: "/stairs.jpg",
  },
  {
    title: "Home Bars",
    description: "Custom-built bars for entertaining and relaxing at home.",
    image: "/bar.jpg",
  },
  {
    title: "General Carpentry",
    description: "Shelving, framing, trim work, and other home upgrades.",
    image: "/carpentry.jpg",
  },
];

// Animated list items
const ServiceList = [
  "Kitchen Remodels",
  "Bathroom Renovations",
  "TV Installations",
  "Replacing Stairs",
  "Home Bars",
  "And much more!"
];

const ServiceItem = ({ text, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <li
      ref={ref}
      className={`opacity-0 transition-opacity duration-700 ${inView ? 'opacity-100' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {text}
    </li>
  );
};

const ServicesSection = () => {
  return (
    <div className="container my-5">
      {/* Visual Service Cards */}
      <h2 className="text-center fw-bold mb-4 gold-heading">Services We Provide</h2>
      <div className="row mb-5">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <Card className="h-100 shadow">
              <Card.Img variant="top" src={service.image} alt={service.title} />
              <Card.Body>
                <Card.Title className="fw-bold">{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Animated List for SEO & Accessibility */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="row align-items-center">
          <div className="col-md-12">
            <Card className="shadow-lg p-4 mb-4">
              <h2 className="fw-bold text-center gold-heading">Our Services</h2>
              <p className="fs-5 text-center">
                Explore the carpentry services we offer, from custom cabinetry to home renovations. We take pride in delivering high-quality craftsmanship tailored to your needs.
              </p>
              <ul className="fs-4 fw-semibold text-dark">
                {ServiceList.map((service, index) => (
                  <ServiceItem key={index} text={service} delay={index * 0.2} />
                ))}
              </ul>
              <p className="fs-5 text-dark text-center">
                From small repairs to large renovations, we handle all your home improvement needs with attention to detail. Whatever your vision is, we can make it a reality.
              </p>
              <div className="text-center mt-4">
                <Link to="/contact">
                  <Button className="gold-button" size="lg">
                    Schedule A Consultation
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

