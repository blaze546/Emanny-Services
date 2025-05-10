import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  // Check if name or email is stored in localStorage on component mount
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');

    if (storedName) {
      setFormData((prevData) => ({
        ...prevData,
        name: storedName,
      }));
    }

    if (storedEmail) {
      setFormData((prevData) => ({
        ...prevData,
        email: storedEmail,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the name and email in localStorage for future use
    if (formData.name && formData.email) {
      localStorage.setItem('name', formData.name);
      localStorage.setItem('email', formData.email);
    }

    console.log('Form submitted', formData);
  };

  // Autofill only when the user focuses on the input field (taps into it)
  const handleFocus = (e) => {
    if (e.target.name === 'name' && !formData.name) {
      const storedName = localStorage.getItem('name');
      if (storedName) {
        setFormData((prevData) => ({
          ...prevData,
          name: storedName,
        }));
      }
    }

    if (e.target.name === 'email' && !formData.email) {
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setFormData((prevData) => ({
          ...prevData,
          email: storedEmail,
        }));
      }
    }
  };

  return (
    <div className="container mt-5">
      {/* Image Section */}
      <div className="text-center mb-4">
        <img 
          src="/favicon.ico" // replace with your image path
          alt="Contact Us"
          className="img-fluid rounded"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>

      <h1 className="text-center mb-4">Contact Us</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Name Field */}
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus} // Trigger autofill on focus
              placeholder="Enter your name"
              required
              className="form-input"
            />
          </Col>

          {/* Email Field */}
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus} // Trigger autofill on focus
              placeholder="Enter your email"
              required
              className="form-input"
            />
          </Col>
        </Row>

        {/* Subject Dropdown */}
        <Row>
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select a subject</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="stairs">Stairs</option>
              <option value="bar">Bar</option>
              <option value="other">Other</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Message Field */}
        <Row>
          <Col md={12} className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="form-input"
            />
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button type="submit" variant="primary" size="lg" className="submit-btn">
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;








