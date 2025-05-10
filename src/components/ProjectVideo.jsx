import React from "react";
import "./ProjectVideo.css";

const ProjectVideo = ({ src, title }) => {
  return (
    <div className="project-video mb-4">
      <h5 className="text-center mb-2">{title}</h5>
      <div className="ratio ratio-16x9 shadow rounded">
        <video src={src} controls autoPlay muted loop className="w-100 h-100 object-fit-cover" />
      </div>
    </div>
  );
};

export default ProjectVideo;


