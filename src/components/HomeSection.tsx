import React from 'react';
import './HomeSection.css';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#3a0ca3] to-[#7209b7] text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            DESIGN <br /> IS OUR <br /> PASSION
          </h1>
          <p className="text-lg text-gray-200">
            Join our design studio. We build extraordinary Minecraft & digital creations with creativity and precision.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 font-medium transition">
            Explore Portfolio
          </button>
        </motion.div>

        {/* Right: Image or Illustration */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full h-[450px] bg-[url('/assets/creative-person.png')] bg-cover bg-center rounded-3xl shadow-lg border border-white/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-500/40 rounded-3xl mix-blend-overlay" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
