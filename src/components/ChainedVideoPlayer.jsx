import React, { useRef, useState, useEffect } from "react";

const ChainedVideoPlayer = ({ videoSources, title }) => {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    // Reset to first video when sources change
    setCurrentVideo(0);
  }, [videoSources]);

  const handleVideoEnd = () => {
    if (currentVideo < videoSources.length - 1) {
      const nextIndex = currentVideo + 1;
      setCurrentVideo(nextIndex);
      videoRef.current.src = videoSources[nextIndex];
      videoRef.current.play();
    }
  };

  return (
    <div className="project-video mb-4">
      <h5 className="text-center mb-2">{title}</h5>
      <div className="ratio ratio-16x9 shadow rounded">
        <video
          ref={videoRef}
          src={videoSources[currentVideo]}
          className="w-100 h-100 object-fit-cover"
          controls
          autoPlay
          muted
          onEnded={handleVideoEnd}
        />
      </div>
    </div>
  );
};

export default ChainedVideoPlayer;


