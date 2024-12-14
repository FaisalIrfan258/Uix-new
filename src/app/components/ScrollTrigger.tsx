'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollTriggerComponent() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const circlesRef = useRef<HTMLDivElement>(null)
  const squaresRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [fontSize, setFontSize] = useState('10vw')

  useEffect(() => {
    const section = sectionRef.current
    const trigger = triggerRef.current
    const circles = circlesRef.current
    const squares = squaresRef.current
    const text = textRef.current

    if (!section || !trigger || !circles || !squares || !text) return

    const resizeText = () => {
      const containerHeight = trigger.clientHeight
      let size = 8 // Start with a slightly smaller initial size
      text.style.fontSize = `${size}vw`
      
      while (text.scrollHeight <= containerHeight * 0.9 && size < 100) { // Reduce max height to 90%
        size++
        text.style.fontSize = `${size}vw`
      }
      
      size--
      setFontSize(`${size}vw`)
    }

    resizeText()
    window.addEventListener('resize', resizeText)

    // Calculate the scroll distance needed to fully reveal the text
    const textWidth = text.scrollWidth
    const containerWidth = trigger.clientWidth
    const scrollDistance = textWidth - containerWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: `+=${scrollDistance + containerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

    tl.to(section, {
      x: -scrollDistance,
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
      window.removeEventListener('resize', resizeText)
    }
  }, [])

  return (
    <section 
      ref={triggerRef} 
      className="h-screen overflow-hidden relative mt-32"
    >
      <div 
        ref={circlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={`circle-${i}`}
            className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-[#00adef] to-[#0074b7] opacity-20"
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
            className="absolute w-8 h-8 bg-gradient-to-br from-[#00adef] to-[#0074b7] opacity-20"
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
        <h2 
          ref={textRef}
          className="font-bold bg-gradient-to-br from-[#00adef] to-[#0074b7] bg-clip-text text-transparent px-4 will-change-transform"
          style={{ fontSize }}
        >
          Shapping Businesses
        </h2>
      </div>
    </section>
  )
}