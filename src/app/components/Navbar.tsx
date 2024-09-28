"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { href: "/Careers", label: "CAREERS" },
    { href: "/Blogs", label: "BLOGS" },
    { href: "/About us", label: "ABOUT US" },
    { href: "/Home", label: "HOME" },
  ];

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <nav className="shadow-md top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 ml-0 sm:ml-[20px]">
            <Link href="/">
              <Image
                src="/uix.png"
                alt="Logo"
                width={240}
                height={240}
                className="w-auto h-10 sm:h-12"
              />
            </Link>
          </div>

          <div className="flex items-center mr-0 sm:mr-[20px]">
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                className="p-2 rounded-md text-gray-400"
                aria-expanded={isHovered}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>

              <div
                className={`absolute top-0 right-full h-full flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
                  isHovered ? "w-auto opacity-100" : "w-0 opacity-0"
                }`}
              >
                <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                  {links.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs sm:text-sm text-black  hover:text-red-600 whitespace-nowrap transition-all duration-300 ease-in-out ${
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
            <button
              className="sm:hidden p-2 rounded-md text-gray-400 hover:text-white"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-[#181815] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700 font-['Clash_Display']">
            <h2 className="text-white text-xl font-semibold">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white font-['Clash_Display']"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 hover:text-red-600 transition-colors duration-200 font-['Clash_Display']"
                onClick={() => setIsSidebarOpen(false)}
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