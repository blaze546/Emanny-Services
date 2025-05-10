import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const ServiceList = [
  "Kitchens Remodels",
  "Bathroom Renovations",
  "TV Installations",
  "Replacing Stairs",
  "Home Bars",
  "And much more!"
];

const ServicesSectionCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-3">
      <Card className="shadow-lg p-4 w-100" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold text-primary text-center">Our Services</h2>
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
            <Button variant="primary" size="lg">See More</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};


const ServiceItem = ({ text, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <li
      ref={ref}
      className={`fs-4 fw-semibold text-dark ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {text}
    </li>
  );
};

export default ServicesSectionCard;
