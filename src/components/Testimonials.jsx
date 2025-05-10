import React, { useState } from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';

const testimonials = [
  {
    name: "John Doe",
    title: "Kitchen Renovation",
    message: "Emanny Services transformed our outdated kitchen into a modern masterpiece. The craftsmanship is top-notch, and we couldn’t be happier with the result!",
    image: "/path/to/john.jpg"
  },
  {
    name: "Sarah Lee",
    title: "Bathroom Makeover",
    message: "The team was professional, and the bathroom looks amazing. They went above and beyond to make sure everything was perfect.",
    image: "/path/to/sarah.jpg"
  },
  {
    name: "James Smith",
    title: "Stairs Renovation",
    message: "We had our stairs redone by Emanny Services. The new design is beautiful and sturdy, and it really enhances the look of our home.",
    image: "/path/to/james.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>

      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className={`carousel-item-inner ${index === activeIndex ? 'fade-in' : ''}`}>
              <Card className="shadow-lg p-4 mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                  />
                  <div>
                    <h5>{testimonial.name}</h5>
                    <p className="text-muted">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mt-3">{testimonial.message}</p>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
