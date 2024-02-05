"use client";

import { useEffect, useRef } from "react";
import ReactGA from "react-ga";

const AnalyticsElement: React.FC = () => {
  const analyticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ReactGA.initialize("YOUR_TRACKING_ID_HERE");
    const analyticsElement = analyticsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Element appeared in view");
          ReactGA.event({
            category: "Element Viewed",
            action: "Element appeared in view",
          });
        }
      });
    });

    observer.observe(analyticsElement as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={analyticsRef}
      className="bg-blue-200 rounded-lg p-4 shadow-md text-center cursor-pointer hover:bg-blue-300 transition duration-300"
    >
      <h2 className="text-lg font-semibold mb-2">
        Interactive Analytics Element
      </h2>
      <p className="mb-4">
        This element will trigger an analytics event when it comes into view.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
};

export default AnalyticsElement;
