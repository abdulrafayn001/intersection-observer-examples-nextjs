"use client";

import { useEffect, useRef, useState } from "react";
import "animate.css";

const AnimatedElement = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasAnimated) {
          // Start your animation logic here
          element.classList.add(
            "animate__animated",
            "animate__fadeInRight",
            "once"
          );
          setHasAnimated(true);
        } else {
          // Stop or reset animation if needed
          element.classList.remove(
            "animate__animated",
            "animate__fadeInRight",
            "once"
          );
          setHasAnimated(false);
        }
      },
      {
        // Optional: Adjust threshold for when the animation should start
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer hover:bg-blue-600 my-10"
    >
      <h2 className="text-lg font-semibold mb-2">
        Interactive Animated Content
      </h2>
      <p className="mb-4">
        This element triggers a one-time animation when it comes into view.
      </p>
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
        Click Me
      </button>
    </div>
  );
};

export default AnimatedElement;
