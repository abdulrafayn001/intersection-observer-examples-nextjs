"use client";
import { useEffect, useRef } from "react";

const AutoPauseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          video.pause();
        } else {
          video.play();
        }
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative mx-auto my-8 max-w-screen-md">
      <video
        ref={videoRef}
        controls
        autoPlay
        width="100%"
        className="rounded-md shadow-md"
      >
        <source src="/autopause.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg font-semibold bg-black bg-opacity-50 p-4 rounded-md">
          Auto-Pause Video
          <br />
          <span className="text-sm">(Pauses when out of view)</span>
        </p>
      </div>
    </div>
  );
};

export default AutoPauseVideo;
