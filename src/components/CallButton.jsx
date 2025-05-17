// src/components/CallButton.jsx
import React from 'react';
import './CallButton.css';

const CallButton = () => {
  return (
    <a
      href="tel:1234567890"
      className="call-button"
      title="Call Emanny Services"
    >
      📞
    </a>
  );
};

export default CallButton;

