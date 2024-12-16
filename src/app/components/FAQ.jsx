"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaFilm, FaClipboard, FaSearch, FaBullhorn } from "react-icons/fa";

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
    icon: FaClipboard,
    title: "CMS Development",
    description:
      "Developing efficient and scalable content management systems tailored to your business needs.",
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
    icon: FaBullhorn,
    title: "Brand Building",
    description:
      "Creating compelling brand identities that resonate with your target audience.",
    videoUrl: "/videos/brand.mp4",
  },
];

const FAQ = () => {
  return (
    <div className="text-gray-800 p-8 md:p-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-8"
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-center mb-12"
      >
        Get to know more about our services and how we help businesses grow.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-500 text-white p-3 rounded-full">
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.video
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full h-40 rounded-md object-cover shadow-md"
                autoPlay
                loop
                muted
                src={service.videoUrl}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Have more questions?</h3>
        <p className="text-gray-600 mb-8">
          Contact us at <a href="mailto:info@yourcompany.com" className="text-indigo-500 font-bold">info@yourcompany.com</a>
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FAQ;
