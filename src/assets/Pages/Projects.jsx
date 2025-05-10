import React from "react";
import ProjectVideo from "../../components/ProjectVideo";
import ChainedVideoPlayer from "../../components/ChainedVideoPlayer";
import './Projects.css'; // Import the custom CSS

const Projects = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-2 text-center">See the Work in Action</h1>
      <p className="text-center text-muted mb-4">
        Watch how Emanny Services transforms homes — from start to finish.
      </p>
      <div className="row">
        <ProjectVideo
          src="/Walk Hill Kitchen slide.mp4"
          title="Kitchen Renovation"
        />

        <ProjectVideo
          src="/Wesmur Bar slide.mp4"
          title="Bar Renovation"
        />

        <ChainedVideoPlayer
          title="Porch Restoration"
          videoSources={[
            "/Walk Hill porch slide 1.MP4",
            "/Walk Hill porch slide 2.MP4"
          ]}
        />

        <ProjectVideo
          src="/Deck Install.mp4"
          title="Deck Remodel"
        />

        <ProjectVideo
          src="/Bathroom Install.mp4"
          title="Bathroom Installation"
        />
      </div>

      {/* Call to Action Button */}
      <div className="text-center mt-5">
        <a
          href="/schedule-consultation" // Adjust the link as needed
          className="btn custom-btn-primary btn-lg"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default Projects;
