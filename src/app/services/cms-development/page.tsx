'use client'

import { motion } from 'framer-motion'
import { FaWordpress, FaShopify, FaDrupal, FaCode, FaDatabase } from 'react-icons/fa'
import Image from 'next/image'

export default function CMSDevelopment() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen ">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#00adef] text-white"
      >
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CMS Development</h1>
          <p className="text-xl md:text-2xl">Streamline your content management with powerful CMS solutions</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our CMS Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaWordpress, title: "WordPress Development", description: "Custom themes and plugins for the world&apos;s most popular CMS" },
  { icon: FaShopify, title: "Shopify Development", description: "Tailored e-commerce solutions for businesses of all sizes" },
  { icon: FaDrupal, title: "Drupal Development", description: "Scalable and secure CMS for complex, content-rich websites" },
  { icon: FaCode, title: "Custom CMS Development", description: "Bespoke content management systems tailored to your needs" },
  { icon: FaDatabase, title: "CMS Migration", description: "Seamless transition between different CMS platforms" }
].map((service, index) => (
  <motion.div
    key={index}
    className="rounded-lg shadow-lg p-6 hover:bg-gradient-to-br from-[#00adef] to-purple-100 transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Add group-hover styles to the icon */}
    <service.icon className="text-5xl mb-4 text-[#00adef] transition-all duration-300  group-hover:text-white" />
    <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
    <p>{service.description}</p>
  </motion.div>
))}

          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our CMS Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Requirements Analysis:</span> Understanding your content management needs</li>
                <li className="text-lg"><span className="font-semibold">CMS Selection:</span> Choosing the right platform for your project</li>
                <li className="text-lg"><span className="font-semibold">Design &amp; Prototyping:</span> Creating wireframes and visual designs</li>
                <li className="text-lg"><span className="font-semibold">Development:</span> Building custom themes, plugins, or entire CMS</li>
                <li className="text-lg"><span className="font-semibold">Content Migration:</span> Transferring existing content to the new system</li>
                <li className="text-lg"><span className="font-semibold">Testing &amp; QA:</span> Ensuring functionality and user experience</li>
                <li className="text-lg"><span className="font-semibold">Deployment:</span> Launching your CMS-powered website</li>
                <li className="text-lg"><span className="font-semibold">Training &amp; Support:</span> Empowering your team to manage content effectively</li>
              </ol>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="CMS Development Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">CMS Platforms We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['WordPress', 'Shopify', 'Drupal', 'Strapi'].map((platform) => (
              <div key={platform} className="text-center">
                <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src={`/${platform.toLowerCase()}.png`}
                    alt={platform}
                    width={48}
                    height={48}
                  />
                </div>
                <p className="font-semibold">{platform}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="bg-[#00adef] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Content Management?</h2>
            <p className="text-xl mb-8">Let&apos;s build a CMS that perfectly fits your business needs.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Your CMS Project
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
