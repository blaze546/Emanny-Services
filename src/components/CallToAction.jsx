import React, { useState } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShaking(true);

    setTimeout(() => {
      window.location.href = "tel:7818051718";
    }, 500);

    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="call-to-action text-center d-flex flex-column align-items-center py-4">
      <a href="/contact" className="btn btn-custom btn-lg mb-3">
        Schedule a Consultation
      </a>
      <p className="fw-bold fs-5 mb-2">or click the number below</p>
      <p className="mb-0 fs-4 phone-number" onClick={handleClick}>
        <span className={isShaking ? 'shake d-inline-block' : 'd-inline-block'}>
        📞
        </span>{" "}
         (781) 805-1718
      </p>

    </div>
  );
};

export default CallToAction;













