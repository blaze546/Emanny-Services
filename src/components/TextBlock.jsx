import React from 'react';
import './TextBlock.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init(); // Initialize AOS

const TextBlock = () => {
  return (
    <div className="text-block-container" data-aos="fade-up" data-aos-duration="800">
      <h2 className="text-block-heading">About Emanny Services</h2>
    </div>
  );
};

export default TextBlock;

