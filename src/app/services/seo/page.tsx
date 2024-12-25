'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaChartLine, FaLink, FaMobileAlt, FaCode, FaRocket } from 'react-icons/fa'
import Image from 'next/image'

export default function SEO() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Search Engine Optimization</h1>
          <p className="text-xl md:text-2xl">Boost your online visibility and drive organic traffic</p>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-16">
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  { icon: FaSearch, title: "Keyword Optimization", description: "Targeting the right keywords to attract your ideal audience" },
  { icon: FaChartLine, title: "Performance Tracking", description: "Monitoring and analyzing your SEO progress" },
  { icon: FaLink, title: "Link Building", description: "Creating high-quality backlinks to boost your authority" },
  { icon: FaMobileAlt, title: "Mobile SEO", description: "Optimizing your site for mobile search results" },
  { icon: FaCode, title: "Technical SEO", description: "Improving your website&apos;s backend for better crawling and indexing" },
  { icon: FaRocket, title: "Local SEO", description: "Boosting your visibility in local search results" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#00adef]">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="SEO Process"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">SEO Audit:</span> Analyzing your current SEO performance</li>
                <li className="text-lg"><span className="font-semibold">Keyword Research:</span> Identifying valuable keywords for your business</li>
                <li className="text-lg"><span className="font-semibold">On-Page Optimization:</span> Improving your website&apos;s content and structure</li>
                <li className="text-lg"><span className="font-semibold">Technical SEO:</span> Enhancing your website&apos;s backend for search engines</li>
                <li className="text-lg"><span className="font-semibold">Content Strategy:</span> Developing SEO-friendly content that engages users</li>
                <li className="text-lg"><span className="font-semibold">Link Building:</span> Acquiring high-quality backlinks to boost authority</li>
                <li className="text-lg"><span className="font-semibold">Performance Tracking:</span> Monitoring and reporting on SEO progress</li>
                <li className="text-lg"><span className="font-semibold">Continuous Improvement:</span> Adapting strategies based on results and algorithm updates</li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="bg-[#00adef] text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Climb the Search Rankings?</h2>
            <p className="text-xl mb-8">Let&apos;s optimize your online presence and drive more organic traffic to your website.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#00adef] font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Your SEO Journey
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
