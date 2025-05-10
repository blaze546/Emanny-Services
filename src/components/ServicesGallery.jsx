import React from 'react';
import { Card } from 'react-bootstrap';

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
    title: "TV Installations",
    description: "Secure and sleek mounting for TVs and media setups.",
    image: "/tv.jpg",
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

const ServicesGallery = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Services We Provide</h2>
      <div className="row">
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
    </div>
  );
};

export default ServicesGallery;
