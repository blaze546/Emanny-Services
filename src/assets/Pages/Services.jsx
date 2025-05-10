import React from 'react';
import ServicesSection from '../../components/ServicesSection';

const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Our Carpentry Services</h1>
      <p className="text-center fs-5 mb-5">
        At Emanny Services, we offer a wide range of carpentry solutions designed to transform your space with quality craftsmanship and attention to detail.
      </p>

      <ServicesSection />
    </div>
  );
};

export default Services;
