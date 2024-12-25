// import React from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { FaArrowLeft } from 'react-icons/fa'

// interface ServiceLayoutProps {
//   children: React.ReactNode
//   title: string
//   color: string
// }

// export default function ServiceLayout({ children, title, color }: ServiceLayoutProps) {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <motion.header
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white shadow-md"
//       >
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <Link href="/#services" className="text-gray-600 hover:text-gray-800 flex items-center">
//             <FaArrowLeft className="mr-2" />
//             Back to Services
//           </Link>
//           <h1 className="text-3xl font-bold" style={{ color }}>
//             {title}
//           </h1>
//         </div>
//       </motion.header>
//       <main>{children}</main>
//     </div>
//   )
// }

