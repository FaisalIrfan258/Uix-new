"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  // Hardcoded data
  const data = {
    links: [
      {
        id: 1,
        title: "Company",
        footLinks: [
          { id: 1, footLinkHref: "/about", footLink: "About Us" },
          { id: 2, footLinkHref: "/services", footLink: "Services" },
          { id: 3, footLinkHref: "/contact", footLink: "Contact" },
        ],
      },
      {
        id: 2,
        title: "Resources",
        footLinks: [
          { id: 4, footLinkHref: "/blog", footLink: "Blog" },
          { id: 5, footLinkHref: "/faqs", footLink: "FAQs" },
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
      { href: "https://twitter.com", name: "Twitter", icon: Twitter },
      { href: "https://linkedin.com", name: "LinkedIn", icon: Linkedin },
    ],
  };

  // Variants for animated elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      // Added margin classes to all sides
      className="p-12 m-4 md:m-6 lg:m-8 flex flex-col lg:flex-row items-start gap-x-36 gap-y-10 bg-secondary-gradient rounded-3xl bg-gradient-to-br from-[#00adef] to-[#0074b7] overflow-hidden"
    >
      <motion.div variants={itemVariants}>
        <Link href={"/"}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/uix.png"
            alt="Halal DevCo. logo"
            width={180}
            height={37}
            className="mt-1 cursor-pointer"
          />
        </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
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
                            className="text-white hover:text-blue-200 transition-colors"
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