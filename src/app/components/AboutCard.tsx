'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

interface CardData {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Discovery",
    description: "We conduct in-depth research to understand your business goals, target audience, and market landscape. This phase lays the groundwork for a strategy tailored specifically to your needs.",
    icon: <img src="/uix.png" alt="Discovery Icon" className="w-12 h-12 rounded-full" />
  },
  {
    id: 2,
    title: "Strategy",
    description: "With a thorough understanding of your business, we create a customized roadmap that outlines every step needed to achieve your objectives effectively and efficiently.",
    icon: <img src="/uix.png" alt="Strategy Icon" className="w-12 h-12 rounded-full" />
  },
  {
    id: 3,
    title: "Implementation",
    description: "Our expert team works diligently to bring your vision to life using innovative tools and technologies. We ensure that every detail is executed flawlessly.",
    icon: <img src="/uix.png" alt="Implementation Icon" className="w-12 h-12 rounded-full" />
  },
  {
    id: 4,
    title: "Optimization",
    description: "We monitor performance metrics and gather feedback to refine and enhance your solutions continually, ensuring sustained growth and success.",
    icon: <img src="/uix.png" alt="Optimization Icon" className="w-12 h-12 rounded-full" />
  }
]

export default function AboutCard() {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardContainerRef = useRef(null)

  const nextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % cardData.length)
  }

  useEffect(() => {
    const section = sectionRef.current
    const titleElement = titleRef.current
    const cardContainer = cardContainerRef.current

    if (!section) return

    // Scroll-based visibility and animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)

          // Animate title
          if (titleElement) {
            gsap.to(titleElement, {
              opacity: entry.isIntersecting ? 1 : 0,
              y: entry.isIntersecting ? 0 : 50,
              duration: 0.7,
              ease: "power3.out"
            })
          }

          // Animate card container
          if (cardContainer) {
            gsap.to(cardContainer, {
              opacity: entry.isIntersecting ? 1 : 0,
              scale: entry.isIntersecting ? 1 : 0.9,
              duration: 0.7,
              ease: "back.out(1.5)"
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Card hover and interaction animations
    const cardElements = document.querySelectorAll('.process-card')
    
    cardElements.forEach((card) => {
      const hoverTween = gsap.timeline({ paused: true })
        .to(card, { 
          scale: 1.05, 
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3 
        })

      card.addEventListener('mouseenter', () => hoverTween.play())
      card.addEventListener('mouseleave', () => hoverTween.reverse())
    })
  }, [activeCardIndex])

  return (
    <div 
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-4 py-12 md:py-24 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text */}
        <div className="w-full md:w-1/2">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
          >
            The Process <br /> We Use for <br />
            <span className="text-[#00adef]">Your Success</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our proven methodology ensures that every project we undertake delivers exceptional outcomes. From initial discovery to continuous optimization, we prioritize your business growth.
          </p>
        </div>

        {/* Right side - Cards */}
        <div 
          ref={cardContainerRef}
          className="w-full md:w-1/2 h-[300px] relative"
        >
          <AnimatePresence mode="popLayout">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ 
                  opacity: 0, 
                  x: 50,
                  scale: 0.9
                }}
                animate={{
                  opacity: index === activeCardIndex ? 1 : 0,
                  x: index === activeCardIndex ? 0 : 50,
                  scale: index === activeCardIndex ? 1 : 0.9,
                }}
                exit={{ 
                  opacity: 0, 
                  x: -50,
                  scale: 0.9
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 process-card ${index === activeCardIndex ? 'z-20' : 'z-10'}`}
              >
                <Card className="h-full">
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    <div>
                      <motion.div
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ 
                          rotate: 0, 
                          opacity: 1,
                          transition: { duration: 0.5, delay: 0.2 }
                        }}
                      >
                        {card.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold mt-4 mb-2 dark:text-gray-300">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {card.description}
                      </p>
                    </div>
                    {index === activeCardIndex && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={nextCard}
                        className="self-end mt-4 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors dark:text-gray-300"
                        aria-label="Next card"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}