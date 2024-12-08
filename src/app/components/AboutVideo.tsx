'use client';

import { useState, useEffect, useRef } from "react";

export default function AboutVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // Hardcoded data
  const heroData = {
    Name: "Bring Your Ideas ",
    gradient: "to Life",
    description: "Transform your visions into reality with cutting-edge solutions.",
    buttonText: "Learn More",
    Video: [{ url: "uix.mp4" }], // Update with your actual video path
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && videoRef.current && contentRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        // Pin and unpin the content
        if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
          contentRef.current.style.position = 'fixed';
          contentRef.current.style.top = '0';
          contentRef.current.style.width = `${containerRect.width}px`;

          // Only start revealing the video when the content is pinned
          const pinnedScrollProgress = -containerRect.top / (containerRect.height - window.innerHeight);
          const clampedPinnedProgress = Math.max(0, Math.min(1, pinnedScrollProgress));
          videoRef.current.style.clipPath = `inset(${(1 - clampedPinnedProgress) * 100}% 0 0 0)`;
        } else if (containerRect.top > 0) {
          contentRef.current.style.position = 'absolute';
          contentRef.current.style.top = '0';
          contentRef.current.style.width = '100%';
          videoRef.current.style.clipPath = 'inset(100% 0 0 0)'; // Hide video completely
        } else {
          contentRef.current.style.position = 'absolute';
          contentRef.current.style.top = 'auto';
          contentRef.current.style.bottom = '0';
          contentRef.current.style.width = '100%';
          videoRef.current.style.clipPath = 'inset(0 0 0 0)'; // Show video completely
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-24 ml-24 mr-24 relative h-[200vh]">
      <div ref={contentRef} className="w-full h-screen overflow-hidden">
      <section
  className={`relative px-8 py-28 border rounded-3xl overflow-hidden z-10 h-full bg-[#00adef]/50`}
>
  <div className="space-y-8">
    <>
      <h1 className="text-3xl dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light">
        {heroData.Name}
        <span className="text-3xl dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light">
          {heroData.gradient}
        </span>
      </h1>
      <p className="text-3xl dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light">
        {heroData.description}
      </p>
      <button
        className="bg-primary-gradient text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black px-6 py-2 rounded-full"
      >
        {heroData.buttonText}
      </button>
    </>
  </div>

          {/* Masked Video Section */}
          <div
            ref={videoRef}
            className="z-0 absolute top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center user-select-none pointer-events-none bg-stone-900"
            style={{
              clipPath: 'inset(100% 0 0 0)',
              transition: 'clip-path 0.05s linear',
            }}
          >
            {heroData.Video?.[0]?.url && (
              <video
                src={heroData.Video[0].url}
                className="w-full h-full object-cover object-center"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              ></video>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
