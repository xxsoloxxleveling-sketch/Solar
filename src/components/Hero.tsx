import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Shield, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-midnight">
      {/* Background Image with Cinematic Grade Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/hero-desktop.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/assets/hero-mobile.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/40 to-midnight"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-transparent to-midnight/80"></div>
      </div>

      {/* Main Content - Vertically Centered */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-gold font-sans tracking-[0.4em] text-xs md:text-sm uppercase block mb-4">
            Invisible Power, Visible Elegance
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-medium text-white leading-[1.1] tracking-tight">
            Powering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              Tomorrow
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-gray-400 font-sans text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
        >
          We architect energy ecosystems for the modern visionary. <br className="hidden md:block" />
          Silence. Efficiency. Absolute control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          <a
            href="#visualizer"
            className="group relative inline-flex items-center gap-4 px-10 py-5 border-[0.5px] border-gold/50 text-gold font-sans tracking-[0.2em] uppercase text-xs transition-all duration-700 hover:bg-gold/10 hover:border-gold hover:tracking-[0.25em]"
          >
            <span>Visualize Your Roof</span>
            <div className="w-[1px] h-4 bg-gold/50 group-hover:bg-gold transition-colors duration-500"></div>
            <Zap className="w-4 h-4 text-gold group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-500" />
          </a>
        </motion.div>
      </div>


    </div>
  );
};

export default Hero;