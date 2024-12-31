'use client'

import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaDesktop, FaRocket, FaShieldAlt, FaTools } from 'react-icons/fa'
import Image from 'next/image'

export default function WebDevelopment() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen dark:text-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#00adef] text-white"
      >
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development</h1>
          <p className="text-xl md:text-2xl">Crafting digital experiences that drive engagement and growth</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Web Development Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaCode, title: "Custom Web Applications", description: "Tailored solutions to meet your unique business needs" },
  { icon: FaMobileAlt, title: "Responsive Design", description: "Seamless experiences across all devices and screen sizes" },
  { icon: FaDesktop, title: "E-commerce Solutions", description: "Robust online stores with secure payment gateways" },
  { icon: FaRocket, title: "Performance Optimization", description: "Lightning-fast websites that keep users engaged" },
  { icon: FaShieldAlt, title: "Web Security", description: "Implementing best practices to protect your data" },
  { icon: FaTools, title: "Maintenance & Support", description: "Ongoing care to keep your website running smoothly" }
].map((service, index) => (
  <motion.div
    key={index}
    className="rounded-lg shadow-lg p-6 hover:bg-gradient-to-br from-[#00adef] to-purple-100 transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Icon with hover effect */}
    <service.icon className="text-5xl mb-4 text-[#00adef] transition-all duration-300 group-hover:text-white" />
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </motion.div>
))}

          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Discovery & Planning:</span> Understanding your goals and mapping out the project</li>
                <li className="text-lg"><span className="font-semibold">Design & Prototyping:</span> Creating wireframes and visual designs</li>
                <li className="text-lg"><span className="font-semibold">Development:</span> Building your website with clean, efficient code</li>
                <li className="text-lg"><span className="font-semibold">Testing & QA:</span> Ensuring functionality and compatibility</li>
                <li className="text-lg"><span className="font-semibold">Deployment:</span> Launching your website securely</li>
                <li className="text-lg"><span className="font-semibold">Maintenance & Support:</span> Providing ongoing care and updates</li>
              </ol>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Web Development Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript','PostgreSql','Firebase' ,'MongoDB'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/${tech.toLowerCase().replace('.', '')}.png`}
                    alt={tech}
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="bg-[#00adef] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Web Project?</h2>
            <p className="text-xl mb-8">Let&apos;s bring your vision to life with our expert web development team.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Get Started
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
