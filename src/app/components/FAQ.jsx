"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaMobile, FaFilm, FaClipboard, FaSearch, FaPaintBrush, FaChevronDown } from "react-icons/fa";
import Link from 'next/link';

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Crafting responsive, user-friendly websites that drive engagement and conversions.",
    videoUrl: "/videos/web.mp4",
    link: "/services/web-development",
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer: "We primarily use modern technologies like React, Next.js, and Node.js to build scalable and performant web applications."
      },
      {
        question: "How long does it typically take to develop a website?",
        answer: "The timeline can vary depending on the complexity of the project. A simple website might take 4-6 weeks, while more complex projects can take 3-6 months."
      }
    ]
  },
  {
    icon: FaMobile,
    title: "App Development",
    description: "Building innovative mobile applications for iOS and Android platforms.",
    videoUrl: "/videos/mobile.mp4",
    link: "/services/app-development",
    faqs: [
      {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, we develop native apps for both iOS and Android, as well as cross-platform apps using technologies like React Native."
      },
      {
        question: "Can you help with app store submission?",
        answer: "We assist with the entire process of submitting your app to both the Apple App Store and Google Play Store."
      }
    ]
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Designing",
    description: "Creating stunning graphics to visually communicate your brand's story.",
    videoUrl: "/videos/graphic.mp4",
    link: "/services/graphic-designing",
    faqs: [
      {
        question: "What types of graphic design services do you offer?",
        answer: "We offer a wide range of services including logo design, branding, marketing materials, social media graphics, and more."
      },
      {
        question: "Do you provide source files for the designs?",
        answer: "Yes, we provide all source files for the final approved designs in formats suitable for both print and digital use."
      }
    ]
  },
  {
    icon: FaFilm,
    title: "Video Editing",
    description: "Editing captivating videos to enhance your brand's visual storytelling.",
    videoUrl: "/videos/video.mp4",
    link: "/services/video-editing",
    faqs: [
      {
        question: "What video formats do you work with?",
        answer: "We work with all major video formats and can deliver in any format required for your specific needs."
      },
      {
        question: "Can you add special effects or animations to videos?",
        answer: "Yes, we can add a variety of special effects, motion graphics, and animations to enhance your videos."
      }
    ]
  },
  {
    icon: FaClipboard,
    title: "CMS Development",
    description: "Developing content management systems to simplify your website management.",
    videoUrl: "/videos/cms.mp4",
    link: "/services/cms-development",
    faqs: [
      {
        question: "Which CMS platforms do you work with?",
        answer: "We work with popular CMS platforms like WordPress, Drupal, and Shopify, as well as headless CMS solutions."
      },
      {
        question: "Can you migrate my existing website to a new CMS?",
        answer: "Yes, we can help migrate your existing website content to a new CMS while ensuring data integrity and SEO preservation."
      }
    ]
  },
  {
    icon: FaSearch,
    title: "SEO",
    description: "Optimizing your digital presence to improve visibility and organic traffic.",
    videoUrl: "/videos/seo.mp4",
    link: "/services/seo",
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While some improvements can be seen in a few months, significant results typically take 6-12 months."
      },
      {
        question: "Do you offer local SEO services?",
        answer: "Yes, we provide local SEO services to help businesses improve their visibility in local search results."
      }
    ]
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900 dark:text-white">{question}</span>
        <FaChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-white transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600 dark:text-white"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#00adef]"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-600 dark:text-white text-lg text-center mb-12"
        >
          Get to know more about our services and how we help businesses grow.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#00adef] text-white p-3 rounded-full">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4 dark:text-white ">{service.description}</p>
                  <Link href={service.link} className="text-[#00adef] font-medium hover:underline">
                    Learn more
                  </Link>
                </div>
                <motion.video
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-40 object-cover"
                  autoPlay
                  loop
                  muted
                  src={service.videoUrl}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">FAQ</h3>
                  {service.faqs.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
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
          <h3 className="text-[#00adef] text-2xl font-bold mb-4">Have more questions?</h3>
          <p className="text-gray-600 mb-8">
            Contact us at <a href="mailto:connect@uixservices.com" className="text-[#00adef] font-bold hover:underline">connect@uixservices.com</a>
          </p>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#00adef] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#0090c5] transition duration-300"
            >
              Contact Us
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;

