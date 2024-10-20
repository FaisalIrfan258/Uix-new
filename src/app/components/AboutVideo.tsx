'use client';

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";

interface HeroData {
  Name: string;
  gradient: string;
  description: string;
  buttonText: string;
  Video?: { url: string }[];
}

export default function AboutVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch hero section data
  const fetchHeroSection = async () => {
    try {
      const response = await axios.get("http://144.24.223.234:1337/hero-section");
      setHeroData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroSection();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && videoRef.current && contentRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - containerRect.top) / (containerRect.height);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

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
          className={`relative px-8 py-28 border rounded-3xl overflow-hidden z-10 h-full
            ${
              loading
                ? "animate-pulse bg-gradient-to-r to-gray-200 via-gray-300 from-gray-400"
                : "bg-gradient-to-br from-[#00adef]/30 to-[#00adef]/10"
            }`}
        >
          <div className="space-y-8">
            {!loading && (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light">
                  {heroData?.Name}
                  <span className="block bg-primary-gradient bg-clip-text text-transparent font-semibold">
                    {heroData?.gradient}
                  </span>
                </h1>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                  {heroData?.description}
                </p>
                <button
                  className="bg-primary-gradient text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black px-6 py-2 rounded-full"
                >
                  {heroData?.buttonText}
                </button>
              </>
            )}
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
            {!loading && (
              <>
                <Image
                  src="/logo.svg"
                  alt="Halal DevCo. logo"
                  width={180}
                  height={37}
                  className="absolute top-8 left-8 select-none"
                  priority
                />
                {heroData?.Video?.[0]?.url && (
                  <video
                    src={`http://144.24.223.234:1337${heroData.Video[0].url}`}
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  ></video>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}