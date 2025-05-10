import React from "react";
import { FaWrench } from "react-icons/fa";

const DreamHomeHeader = () => {
  return (
    <div className="text-center mt-5">
      <div className="animate-slide-in">
        <h2 className="fw-bold display-4 text-dark">
          Let’s <span className="text-primary">Build Your Dream Home</span> Together!
        </h2>
      </div>
      <div className="text-center mt-3">
        <FaWrench className="wrench-icon animate-wrench" />
      </div>
    </div>
  );
};

export default DreamHomeHeader;
