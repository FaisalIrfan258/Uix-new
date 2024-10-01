"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronRight, Mail } from 'lucide-react'

export default function HeroComponent() {
  const [isActive, setIsActive] = useState(false)
  const [email, setEmail] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleEmailInput = () => {
    setIsActive(!isActive)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleFormSubmit = () => {
    console.log('Submitted email:', email)
    setEmail('')
    setIsActive(false)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-8xl lg:text-8xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            Bring your<br /> vision <span className='text-[#00adef]'>to life</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <div id="email" className="relative mt-8 w-full sm:w-80 transition-all duration-300 border-2 rounded-2xl shadow p-1">
              <div
                className={`flex items-center w-full h-16 cursor-pointer transition-justify-content duration-300`}
                onClick={toggleEmailInput}
              >
                <div className="w-16 h-16 rounded-2xl flex justify-center items-center mx-1"
                  style={{
                    background: "linear-gradient(135deg, #00adef 0%, #0074b7 100%)",
                  }}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <span className="font-bold text-lg sm:text-xl ml-4 text-gray-800 dark:text-white">
                  Schedule A Demo
                </span>
                <span className={`ml-auto mr-4 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
                  <ChevronRight className="text-gray-800 dark:text-white w-6 h-6" />
                </span>
              </div>

              {isActive && (
                <div className="absolute top-full left-0 mt-2 w-full z-20 bg-white dark:bg-[#111827] p-4 shadow-lg rounded-lg">
                  <input
                    id="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full p-3 mb-3 rounded-lg border-2 bg-white dark:bg-[#111827] text-black dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    id="submitbutton"
                    type="button"
                    onClick={handleFormSubmit}
                    className="w-full rounded-lg p-3 font-bold text-white cursor-pointer transition-colors duration-300 text-lg" 
                    style={{
                      background: "linear-gradient(135deg, #00adef 0%, #0074b7 100%)",
                    }}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`w-full md:w-1/2 transition-all duration-300 ${isActive && isMobile ? 'mt-32' : ''}`}>
          <Image
            src="/hero.png"
            alt="Hero image"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}