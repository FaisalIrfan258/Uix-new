'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollTriggerComponent() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const circlesRef = useRef<HTMLDivElement>(null)
  const squaresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const trigger = triggerRef.current
    const circles = circlesRef.current
    const squares = squaresRef.current

    if (!section || !trigger || !circles || !squares) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.to(section, {
      translateX: '-100%',
      ease: 'none',
      duration: 1,
    })

    // Animate circles
    gsap.to(circles.children, {
      x: 'random(-100, 100)',
      y: 'random(-50, 50)',
      rotation: 'random(-360, 360)',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1,
    })

    // Animate squares
    gsap.to(squares.children, {
      x: 'random(-100, 100)',
      y: 'random(-50, 50)',
      rotation: 'random(-180, 180)',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1,
    })

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      tl.kill()
    }
  }, [])

  return (
    <section 
      ref={triggerRef} 
      className="h-screen overflow-hidden bg-[#1A1A1A] relative"
    >
      <div 
        ref={circlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={`circle-${i}`}
            className="absolute w-8 h-8 rounded-full bg-purple-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div 
        ref={squaresRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={`square-${i}`}
            className="absolute w-8 h-8 bg-pink-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div 
        ref={sectionRef} 
        className="flex items-center h-full whitespace-nowrap"
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text px-4 will-change-transform">
          Building Solutions that shape your business
        </h2>
      </div>
    </section>
  )
}