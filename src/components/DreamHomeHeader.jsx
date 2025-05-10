import React from "react";
import { FaWrench } from "react-icons/fa";
import "./DreamHomeHeader.css";

const DreamHomeHeader = () => {
  return (
    <div className="dream-home-header-container text-center mt-5 pb-4">
      <div className="animate-slide-in">
        <h2 className="fw-bold display-4 text-dark">
          Let’s <span className="text-gold">Build Your Dream Home</span> Together!
        </h2>
      </div>
      <div className="text-center mt-3">
        <FaWrench className="wrench-icon animate-wrench" />
      </div>
    </div>
  );
};

export default DreamHomeHeader;

