import React from "react";
import "./ProjectVideo.css";

const ProjectVideo = ({ src, title }) => {
  return (
    <div className="project-video mb-4">
      <h5 className="text-center mb-2">{title}</h5>
      <div className="video-container">
        <video
          src={src}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="video-element"
        />
      </div>
    </div>
  );
};

export default ProjectVideo;




