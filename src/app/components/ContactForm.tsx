"use client";

import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";

const ContactForm: React.FC = () => {
  const formRef = useRef(null);
  const modelRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.5 });
  const isModelInView = useInView(modelRef, { once: true, amount: 0.5 });

  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-8 lg:p-16 bg-background"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Left: Form Section */}
        <motion.div
          ref={formRef}
          initial={{ x: -100, opacity: 0 }}
          animate={isFormInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-md"
        >
          <h2 className="text-[#00adef] text-4xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-grey-900 dark:text-white block text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-input rounded-md shadow-sm focus:ring-primary focus:border-primary bg-background text-grey-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-grey-900 dark:text-white block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-input rounded-md shadow-sm focus:ring-primary focus:border-primary bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-grey-900 dark:text-white block text-sm font-medium text-foreground"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 w-full border border-input rounded-md shadow-sm focus:ring-primary focus:border-primary bg-background text-foreground"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="group relative inline-block w-full max-w-xs py-2 px-4 font-medium text-grey-900 dark:text-white rounded-md overflow-hidden bg-primary shadow-sm"
              >
                <span className="absolute inset-0 bg-[#00adef] transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition duration-300"></span>
                <span className="relative z-10 text-primary-foreground group-hover:text-white transition duration-300">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right: GLTF Model */}
        <motion.div
          ref={modelRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isModelInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 h-[500px] lg:h-[600px] max-w-md"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <Model />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

const Model: React.FC = () => {
  const { scene } = useGLTF("/planet/scene.gltf");
  const modelRef = useRef<THREE.Group>(null);

  // Rotate the model continuously
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[3, 3, 3]} // Increased scale to make the model larger
      position={[0, -0.5, 0]} // Adjusted position to center the larger model
    />
  );
};

export default ContactForm;