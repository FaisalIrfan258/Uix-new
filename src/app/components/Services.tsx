"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaSearch,
  FaFilm,
  FaBullhorn,
  FaClipboard,
} from "react-icons/fa";
import { ServiceCard } from "./ServiceCard"; // Ensure the correct import path
import gsap from "gsap";

export default function Services() {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Crafting responsive, user-friendly websites that drive engagement and conversions.",
      videoUrl: "/videos/web.mp4",
    },
    {
      icon: FaMobile,
      title: "App Development",
      description:
        "Building innovative mobile applications for iOS and Android platforms.",
      videoUrl: "/videos/mobile.mp4",
    },
    {
      icon: FaFilm,
      title: "Graphic Designing and Video Editing",
      description:
        "Creating stunning graphics and editing videos to enhance your brand’s visual storytelling.",
      videoUrl: "/videos/graphic.mp4",
    },
    {
      icon: FaClipboard, // Updated icon for CMS Development
      title: "CMS Development",
      description:
        "Building innovative mobile applications for iOS and Android platforms.",
      videoUrl: "/videos/cms.mp4",
    },
    {
      icon: FaSearch,
      title: "SEO",
      description:
        "Optimizing your digital presence to improve visibility and organic traffic.",
      videoUrl: "/videos/seo.mp4",
    },
    {
      icon: FaBullhorn, // Updated icon for Brand Building
      title: "Brand Building",
      description:
        "Creating compelling brand identities that resonate with your target audience.",
      videoUrl: "/videos/brand.mp4",
    },
  ];
  useEffect(() => {
    const section = servicesRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          // Animate section title
          const titleElement = section.querySelector("h2");
          if (titleElement) {
            gsap.to(titleElement, {
              opacity: entry.isIntersecting ? 1 : 0,
              y: entry.isIntersecting ? 0 : -50,
              duration: 0.5,
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the section is visible
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" ref={servicesRef} className="py-20 overflow-hidden ">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-[#00adef] text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-50px)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              videoUrl={service.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
