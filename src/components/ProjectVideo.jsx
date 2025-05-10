import React, { useEffect, useRef } from "react";
import "./ProjectVideo.css";

const ProjectVideo = ({ src, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      },
      { threshold: 0.5 } // Play when 50% of the video is in view
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="project-video mb-4">
      <h5 className="text-center mb-2">{title}</h5>
      <div className="video-container">
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          muted
          loop
          className="w-100 h-auto object-fit-cover video-element"
        />
      </div>
    </div>
  );
};

export default ProjectVideo;




