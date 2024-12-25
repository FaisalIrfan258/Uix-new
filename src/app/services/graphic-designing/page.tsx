'use client'

import { motion } from 'framer-motion'
import { FaPaintBrush, FaImage, FaLayerGroup, FaFont, FaDesktop, FaPalette } from 'react-icons/fa'
import Image from 'next/image'

export default function GraphicDesigning() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#00adef] text-white"
      >
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Graphic Designing</h1>
          <p className="text-xl md:text-2xl">Visualize your brand&apos;s story with stunning graphics</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Graphic Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaPaintBrush, title: "Brand Identity", description: "Logos, color palettes, and brand guidelines" },
  { icon: FaImage, title: "Digital Illustrations", description: "Custom illustrations for web and print" },
  { icon: FaLayerGroup, title: "Print Design", description: "Brochures, flyers, and marketing materials" },
  { icon: FaFont, title: "Typography", description: "Custom typefaces and lettering" },
  { icon: FaDesktop, title: "UI/UX Design", description: "Intuitive interfaces for web and mobile" },
  { icon: FaPalette, title: "Packaging Design", description: "Eye-catching product packaging" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Discovery:</span> Understanding your brand and objectives</li>
                <li className="text-lg"><span className="font-semibold">Research:</span> Analyzing market trends and competitors</li>
                <li className="text-lg"><span className="font-semibold">Conceptualization:</span> Brainstorming and sketching ideas</li>
                <li className="text-lg"><span className="font-semibold">Design:</span> Creating initial designs and iterations</li>
                <li className="text-lg"><span className="font-semibold">Refinement:</span> Incorporating feedback and polishing designs</li>
                <li className="text-lg"><span className="font-semibold">Delivery:</span> Providing final files in various formats</li>
              </ol>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Graphic Design Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Design Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'InDesign', 'After Effects', 'Blender'].map((tool) => (
              <div key={tool} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/${tool.toLowerCase().replace(' ', '')}.png`}
                    alt={tool}
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="bg-[#00adef] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
            <p className="text-xl mb-8">Let&apos;s create stunning visuals that capture your brand&apos;s essence.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Designing
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
