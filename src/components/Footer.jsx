import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import the custom CSS

const Footer = () => {
  return (
    <footer className="custom-footer text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>Emanny Services</h5>
            <p>Expert carpentry solutions to bring your vision to life. Contact us for your next project!</p>
          </Col>
          <Col md={3}>
            <h6>Follow Us</h6>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com" className="text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="text-white">Twitter</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <p>&copy; {new Date().getFullYear()} Emanny Services. All rights reserved.</p>
          <p className="site-creator">
            Created for <a href="https://briandevelops.com" target="_blank" rel="noopener noreferrer">Emanny Services</a> by <a href="https://briandevelops.com" target="_blank" rel="noopener noreferrer">BrianDevelops.com</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

