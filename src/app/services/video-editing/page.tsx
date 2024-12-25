'use client'

import { motion } from 'framer-motion'
import { FaFilm, FaCut, FaMusic, FaMagic, FaCamera, FaLightbulb } from 'react-icons/fa'
import Image from 'next/image'

export default function VideoEditing() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Video Editing</h1>
          <p className="text-xl md:text-2xl">Bring your stories to life with captivating video content</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Video Editing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaFilm, title: "Post-Production", description: "Polishing your raw footage into a final masterpiece" },
  { icon: FaCut, title: "Video Trimming", description: "Precise cutting and arrangement of video clips" },
  { icon: FaMusic, title: "Audio Mixing", description: "Balancing and enhancing your video&apos;s soundscape" },
  { icon: FaMagic, title: "Visual Effects", description: "Adding stunning VFX to elevate your video" },
  { icon: FaCamera, title: "Color Grading", description: "Enhancing the visual mood and style of your footage" },
  { icon: FaLightbulb, title: "Motion Graphics", description: "Creating dynamic animated elements and titles" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Video Editing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Video Editing Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Footage Review:</span> Analyzing and organizing raw material</li>
                <li className="text-lg"><span className="font-semibold">Rough Cut:</span> Creating an initial edit structure</li>
                <li className="text-lg"><span className="font-semibold">Fine Cut:</span> Refining the edit and timing</li>
                <li className="text-lg"><span className="font-semibold">Audio Mixing:</span> Balancing dialogue, music, and sound effects</li>
                <li className="text-lg"><span className="font-semibold">Color Grading:</span> Enhancing the visual style and mood</li>
                <li className="text-lg"><span className="font-semibold">Final Delivery:</span> Exporting in various formats for different platforms</li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our Editing Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Adobe Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'After Effects'].map((tool) => (
              <div key={tool} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/logos/${tool.toLowerCase().replace(' ', '')}.svg`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Stunning Videos?</h2>
            <p className="text-xl mb-8">Let&apos;s transform your raw footage into captivating visual stories.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Editing
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
