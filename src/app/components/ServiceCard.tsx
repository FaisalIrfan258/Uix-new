'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { FaCode, FaMobile, FaSearch, FaPaintBrush, FaRobot } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  index: number
}

export const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

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

    // Hover interaction
    const hoverTween = gsap.timeline({ paused: true })
      .to(card, { 
        scale: 1.05, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.3 
      })

    const handleMouseEnter = () => hoverTween.play()
    const handleMouseLeave = () => hoverTween.reverse()

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      observer.disconnect()
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [index])

  return (
    <motion.div
      ref={cardRef}
      className={`service-card p-6 rounded-lg shadow-lg bg-white overflow-hidden relative transition-all duration-500 
        ${isVisible ? 'opacity-100' : 'opacity-0 scale-90'}`}
      whileTap={{ scale: 0.95 }}
      style={{ 
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        opacity: isVisible ? 1 : 0
      }}
    >
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#00adef] to-purple-500 transition-all duration-300"
        style={{ 
          clipPath: isVisible 
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
            : 'polygon(0 0, 0 0, 0 100%, 0% 100%)' 
        }}
      />

      <div className="relative z-10">
        <motion.div 
          className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#00adef]"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ 
            rotate: isVisible ? 0 : -180, 
            opacity: isVisible ? 1 : 0 
          }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>)}