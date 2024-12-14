'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  index: number
  videoUrl: string
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index, 
  videoUrl 
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)

          if (entry.isIntersecting) {
            gsap.fromTo(
              card,
              { 
                opacity: 0, 
                scale: 0.8,
                y: 50 
              },
              { 
                opacity: 1, 
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                delay: index * 0.2 
              }
            )
          } else {
            gsap.to(card, {
              opacity: 0,
              scale: 0.8,
              y: 50,
              duration: 0.5
            })
          }
        })
      },
      {
        threshold: 0.1 // Trigger when at least 10% of the card is visible
      }
    )

    if (card) {
      observer.observe(card)
    }

    return () => {
      observer.disconnect()
    }
  }, [index])

  useEffect(() => {
    // Handle video playback on hover
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered])

  return (
    <motion.div
      ref={cardRef}
      className={`service-card relative w-full h-[250px] overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0 scale-90'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="relative w-full h-full transition-transform duration-500">
        {/* Front of Card */}
        <div 
          className={`absolute w-full h-full bg-white rounded-lg shadow-lg p-4 sm:p-6 overflow-hidden transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Animated Background Gradient */}
          <div 
            className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#00adef] to-purple-500 transition-all duration-300"
          />

          <div className="relative z-10 flex flex-col justify-center h-full">
            <motion.div 
              className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 rounded-full bg-[#00adef]"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ 
                rotate: isVisible ? 0 : -180, 
                opacity: isVisible ? 1 : 0 
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold">{title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{description}</p>
          </div>
        </div>

        {/* Back of Card with Video */}
        <div 
          className={`absolute w-full h-full bg-black text-white rounded-lg shadow-lg transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            src={videoUrl}
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard
