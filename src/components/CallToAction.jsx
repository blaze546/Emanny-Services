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
      <a href="/Contact" className="btn btn-custom btn-lg mb-3">
        Schedule a Consultation
      </a>
      <p className="fw-bold fs-5 mb-2">or click the number below</p>
      <div className="arrow-container mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#d8a339"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20m0 0l-6-6m6 6l6-6" />
        </svg>
      </div>
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
















