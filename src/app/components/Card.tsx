"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [

  {
    id: 6,
    title: "Maintenance",
    description:
      "Our commitment continues after deployment. We proactively monitor and update your software to keep it performing at its best, ensuring your satisfaction at all times.",
  },
  
  {
    id: 5,
    title: "Deployment",
    description:
      "Experience the smooth deployment of your software solution with precision. We minimize downtime and ensure a seamless transition, delivering a fully functional product.",
  },
  
  {
    id: 4,
    title: "Testing",
    description:
      "At UIX, we ensure top-notch quality through rigorous testing, thoroughly checking every line of code for functionality, security, and performance.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our skilled developers bring your vision to life using agile methodologies. We break the project into sprints for steady progress, maintaining high quality and transparency.",
  },
  {
    id: 2,
    title: "System Design",
    description:
      "Our experts design a scalable system tailored to your needs, using advanced technologies to create a blueprint that ensures current functionality and future growth.",
  },
  {
    id: 1,
    title: "Requirements Analysis",
    description:
      "At UIX , we begin by understanding your goals in detail, ensuring a solid foundation for successful software development through close collaboration and clear communication.",
  },

];

export default function CardStack() {
  const [activeCards, setActiveCards] = useState(cards);
  const [swiping, setSwiping] = useState<number | null>(null);

  useEffect(() => {
    if (activeCards.length === 0) {
      setActiveCards(cards);
    }
  }, [activeCards]);

  const handleSwipe = (id: number) => {
    setSwiping(id);
    setTimeout(() => {
      setActiveCards((prev) => prev.filter((card) => card.id !== id));
      setSwiping(null);
    }, 300);
  };

  return (
    <div className="flex w-full h-full max-w-6xl mt-24 px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden">
      <div className="flex flex-col w-full md:flex-row items-start">
        {/* Left Side - Heading */}
        <div className="w-full md:w-1/2 mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 dark:text-white mb-8 px-2 ml-6 sm:px-0">
            The Process <br /> We Use for <br />
            <span className="text-[#00adef]"
        
          >Your Success</span>
          </h2>
        </div>

        {/* Right Side - Cards */}
        <div className="relative h-[400px] sm:h-[250px] md:h-[300px] w-full md:w-1/2 mr-10  ">
          <AnimatePresence>
            {activeCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`absolute inset-0 bg-[#111827] rounded-lg p-4 sm:p-6 md:p-8 shadow-lg border border-[#3C3C3C] ${
                  index === activeCards.length - 1 ? "z-20" : "z-10"
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: swiping === card.id ? 0 : 1,
                  x: swiping === card.id ? "120%" : `${index * 2}%`,
                  scale: index === activeCards.length - 1 ? 1 : 0.95,
                }}
                exit={{ opacity: 0, x: "120%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative -mt-10">
                      <Image
                        src="/uix.png"
                        alt="X icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl mt-8 font-semibold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-4 text-white opacity-80 leading-tight">
                    {card.description}
                  </p>

                  {/* Forward Arrow Button */}
                  {index === activeCards.length - 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSwipe(card.id);
                      }}
                      className="absolute bottom-4 right-4 bg-[#3C3C3C] rounded-full border border-inherit p-3 shadow-lg hover:bg-[#4C4C4C] transition-colors mt-6"
                      aria-label="Next card"
                      disabled={swiping !== null}
                    >
                      <div className="w-6 h-6 relative">
                        <Image
                          src="/arrow .png"
                          alt="Arrow icon"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
