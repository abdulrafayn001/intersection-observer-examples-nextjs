// pages/index.tsx
"use client";
import { useEffect, useRef, useState } from "react";

type CityEmojis = {
  [key: string]: string;
};

const cityEmojis: CityEmojis = {
  "Paris, France": "🗼",
  "New York City, USA": "🗽",
  "Tokyo, Japan": "🗾",
  "London, UK": "🏰",
  "Sydney, Australia": "🐨",
};

const InfiniteScrollPage = () => {
  const [data, setData] = useState<string[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        // Fetch more data when loader becomes visible
        fetchMoreData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [data]);

  const fetchMoreData = () => {
    // Fetch more data from API and update state
    // For demonstration, using a list of famous cities
    const newData = [
      "Paris, France",
      "New York City, USA",
      "Tokyo, Japan",
      "London, UK",
      "Sydney, Australia",
    ];

    setData((prevData) => [...prevData, ...newData]);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((city, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold">
              {cityEmojis[city]} {city}
            </p>
            {/* Add more meaningful content and styling as needed */}
          </div>
        ))}
      </div>
      <div ref={loaderRef} className="text-center mt-8">
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default InfiniteScrollPage;
