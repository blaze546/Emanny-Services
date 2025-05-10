import React, { useState } from 'react';

const CallToAction = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent immediate redirect
    setIsShaking(true);

    setTimeout(() => {
      window.location.href = "tel:7818051718";
    }, 500);

    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div className="text-center bg-light py-4">
      <a href="tel:7818051718" className="btn btn-primary btn-lg mb-2">
        Call for a Free Estimate
      </a>
      <p className="mb-0 fs-5" onClick={handleClick}>
        <span className={isShaking ? 'shake d-inline-block' : 'd-inline-block'}>
          📞
        </span>{" "}
        (781) 805-1718
      </p>
    </div>
  );
};

export default CallToAction;











