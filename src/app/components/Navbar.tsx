"use client"
import { ChangeEventHandler, useEffect, useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';

// ToggleSwitch Component
const ToggleSwitch = ({ isChecked, onChange }: { isChecked: boolean, onChange: ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <label className="relative inline-block w-16 h-8 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onChange}
      />
      <span className={`
        absolute inset-0 rounded-full transition duration-300 ease-in-out
        ${isChecked 
          ? 'bg-purple-700 dark:bg-blue-600' 
          : 'bg-blue-300 dark:bg-blue-700'}
      `}>
        <span className={`
          absolute inset-1 w-6 h-6 bg-white rounded-full shadow transition duration-300 ease-in-out
          ${isChecked ? 'translate-x-8' : 'translate-x-0'}
        `}></span>
      </span>
      <svg className={`
        absolute top-1.5 left-1.5 w-5 h-5 text-yellow-400 transition-opacity duration-300
        ${isChecked ? 'opacity-0' : 'opacity-100'}
      `} viewBox="0 0 12 12" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <circle cx="6" cy="6" r="2" />
          <g strokeDasharray="1.5 1.5">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
            <polyline 
              key={index.toString()} 
              points="6 10,6 11.5" 
              transform={`rotate(${angle},6,6)`} 
            />
          ))}
          </g>
        </g>
      </svg>
      <svg className={`
        absolute top-1.5 right-1.5 w-5 h-5 text-slate-400	 transition-opacity duration-300
        ${isChecked ? 'opacity-100' : 'opacity-0'}
      `} viewBox="0 0 12 12" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" transform="rotate(-45,6,6)">
          <path d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"/>
        </g>	
      </svg>
      <span className="sr-only">Dark Mode</span>
    </label>
  );
};

// Navbar Component
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const links = [
    { href: "#blog", label: "BLOGS" },
    { href: "#services", label: "SERVICES" },
    { href: "#about", label: "ABOUT US" },
    { href: "#home", label: "HOME" },
  ]

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isSidebarOpen])

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,  // Animations should trigger both on scroll down and scroll up
    });
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Animates from left */}
          <div className="flex-shrink-0 ml-0 sm:ml-[30px]" data-aos="fade-down" data-aos-offset="200">
            <Link href="/">
              <Image
                src="/uix.png"
                alt="Logo"
                width={600}  // Adjust width here
                height={350} // Adjust height here
                className="w-auto h-16 sm:h-20"
              />
            </Link>
          </div>

          {/* Links and Toggle Section - Animates from right */}
          <div className="flex items-center mr-0 sm:mr-[30px] space-x-6" data-aos="fade-down" data-aos-offset="200">
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                className="p-3 rounded-md text-gray-600 dark:text-gray-300"
                aria-expanded={isHovered}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-8 w-8" aria-hidden="true" />
              </button>

              <div
                className={`absolute top-0 right-full h-full flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
                  isHovered ? "w-auto opacity-100" : "w-0 opacity-0"
                }`}
              >
                <div className="flex flex-row-reverse space-x-6 space-x-reverse mr-10">
                  {links.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 hover:text-[#00adef] dark:hover:text-[#00adef] whitespace-nowrap transition-all duration-300 ease-in-out ${
                        isHovered
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <ToggleSwitch isChecked={darkMode} onChange={toggleDarkMode} />

            <button
              className="sm:hidden p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-[#00adef] dark:hover:text-[#00adef]"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-72 h-full bg-gray-800 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex items-center justify-between">
            <span className="text-white font-semibold text-lg">Menu</span>
            <button
              className="p-3 rounded-md text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>

          <div className="px-6 py-4 space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
