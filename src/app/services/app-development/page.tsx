'use client'

import { motion } from 'framer-motion'
import { FaMobileAlt, FaAndroid, FaApple, FaCode, FaRocket, FaPuzzlePiece } from 'react-icons/fa'
import Image from 'next/image'

export default function AppDevelopment() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">App Development</h1>
          <p className="text-xl md:text-2xl">Innovative mobile solutions for iOS and Android platforms</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our App Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaAndroid, title: "Android Development", description: "Native Android apps with Material Design" },
  { icon: FaApple, title: "iOS Development", description: "Sleek iOS apps following Apple&apos;s Human Interface Guidelines" },
  { icon: FaCode, title: "Cross-Platform Apps", description: "Build once, deploy everywhere with React Native" },
  { icon: FaMobileAlt, title: "UI/UX Design", description: "Intuitive and engaging user interfaces" },
  { icon: FaRocket, title: "App Store Optimization", description: "Improve visibility and downloads in app stores" },
  { icon: FaPuzzlePiece, title: "Third-party Integrations", description: "Seamless integration with APIs and services" }
].map((service, index) => (
  <motion.div
    key={index}
    className="rounded-lg shadow-lg p-6 hover:bg-gradient-to-br from-[#00adef] to-purple-100 transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Update the icon styling */}
    <service.icon className="text-5xl mb-4 text-[#00adef] transition-all duration-300 group-hover:text-white" />
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
    <p>{service.description}</p>
  </motion.div>
))}

          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our App Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="App Development Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Concept &amp; Strategy:</span> Defining your app&apos;s purpose and target audience</li>
                <li className="text-lg"><span className="font-semibold">UI/UX Design:</span> Creating intuitive and engaging user interfaces</li>
                <li className="text-lg"><span className="font-semibold">Development:</span> Building your app with clean, efficient code</li>
                <li className="text-lg"><span className="font-semibold">UI/UX Design:</span> Creating intuitive and engaging user interfaces</li>
                <li className="text-lg"><span className="font-semibold">Development:</span> Building your app with clean, efficient code</li>
                <li className="text-lg"><span className="font-semibold">Testing &amp; QA:</span> Rigorous testing across devices and scenarios</li>
                <li className="text-lg"><span className="font-semibold">Deployment:</span> Launching your app on the App Store and Google Play</li>
                <li className="text-lg"><span className="font-semibold">Maintenance &amp; Updates:</span> Ongoing support and feature enhancements</li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'GraphQL', 'AWS', 'Azure'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/${tech.toLowerCase().replace(' ', '')}.png`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your App?</h2>
            <p className="text-xl mb-8">Let&apos;s turn your app idea into reality with our expert development team.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
