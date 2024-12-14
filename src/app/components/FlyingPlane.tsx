// import React from 'react';
// import { motion } from 'framer-motion';
// import { Plane } from 'lucide-react';

// const FlyingPlane = () => {
//   const randomY = () => Math.random() * 80 - 40; // Random value between -40 and 40

//   const planeVariants = {
//     initial: { x: '100%', y: randomY() },
//     animate: {
//       x: [null, '-100%', '100%'],
//       y: [null, randomY(), randomY()],
//       transition: {
//         x: { duration: 20, times: [0, 0.5, 1], repeat: Infinity },
//         y: { duration: 20, times: [0, 0.5, 1], repeat: Infinity },
//       }
//     }
//   };

//   return (
//     <motion.div
//       className="absolute inset-0 pointer-events-none"
//       initial="initial"
//       animate="animate"
//       variants={planeVariants}
//     >
//       <Plane className="text-white opacity-50" size={32} />
//     </motion.div>
//   );
// };

// export default FlyingPlane;

