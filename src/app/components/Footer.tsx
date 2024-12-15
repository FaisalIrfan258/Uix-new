"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Hardcoded data
  const data = {
    links: [
      {
        id: 1,
        title: "Company",
        footLinks: [
          { id: 1, footLinkHref: "/#about", footLink: "About Us" },
          { id: 2, footLinkHref: "/#services", footLink: "Services" },
          { id: 3, footLinkHref: "/#contact", footLink: "Contact" },
        ],
      },
      {
        id: 2,
        title: "Resources",
        footLinks: [
          { id: 4, footLinkHref: "/#blog", footLink: "Blog" },
          { id: 5, footLinkHref: "/#faqs", footLink: "FAQs" },
        ],
      },
      {
        id: 4,
        title: "Social",
        footLinks: [], // This will be for social networks
      },
    ],
  };

  const footerLinks = {
    social_network: [
      { href: "https://facebook.com", name: "Facebook", icon: Facebook },
      { href: "https://linkedin.com", name: "LinkedIn", icon: Linkedin },
      { href: "https://instagram.com", name: "Instagram", icon: Instagram },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Variants for animated elements
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: scrollDirection === "down" ? 100 : -100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const socialIconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.footer 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={containerVariants}
    className="p-12 m-4 md:m-6 lg:m-8 flex flex-col lg:flex-row items-start justify-between gap-x-8 gap-y-10 rounded-3xl overflow-hidden"
    style={{
      backgroundImage: "url('/footerbanner.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <motion.div variants={itemVariants} className="w-full lg:w-auto">
        <Link href={"/"}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/uix-white.png"
            alt="Uix. logo"
            width={250}
            height={100}
            className="mt-1 cursor-pointer"
          />
        </Link>
      </motion.div>
      
      <div className="ml-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full">
        {data.links.map((linkItem, linkIndex) => (
          <motion.div 
            variants={itemVariants} 
            className="space-y-4" 
            key={linkItem.id}
          >
            <motion.h3 
              variants={itemVariants}
              className="font-semibold text-2xl text-white"
            >
              {linkItem.title}
            </motion.h3>
            
            {linkIndex === data.links.length - 1 ? (
              <ul className="flex flex-wrap gap-6">
                {footerLinks.social_network.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                    >
                      <Link href={social.href} aria-label={social.name}>
                        <motion.div variants={socialIconVariants}>
                          <SocialIcon 
                            className="text-white hover:text-white-200 transition-colors"
                            size={24} 
                          />
                        </motion.div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            ) : (
              <ul className="flex flex-col space-y-2">
                {linkItem.footLinks.map((link) =>
                  link.footLinkHref !== null ? (
                    <motion.li 
                      key={link.id}
                      variants={itemVariants}
                      whileHover={{ x: 10, color: '#00ffff' }}
                    >
                      <Link 
                        href={link.footLinkHref} 
                        className="text-white hover:text-cyan-200 transition-colors"
                      >
                        {link.footLink}
                      </Link>
                    </motion.li>
                  ) : (
                    <motion.li 
                      key={link.id}
                      variants={itemVariants}
                    >
                      {link.footLink}
                    </motion.li>
                  )
                )}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;

