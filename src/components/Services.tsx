import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Factory, Sun, Moon } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const [mode, setMode] = useState<'day' | 'night'>('day');

  const services: Service[] = [
    {
      id: 'res',
      title: 'Residential',
      subtitle: 'Energy Independence',
      description: 'Custom-designed solar arrays for luxury homes, integrated seamlessly with architecture.',
      type: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'com',
      title: 'Commercial',
      subtitle: 'Corporate Sustainability',
      description: 'Reduce operating costs and showcase your commitment to a green future.',
      type: 'commercial',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'ind',
      title: 'Industrial',
      subtitle: 'Utility-Scale Power',
      description: 'Mega-watt scale solutions for manufacturing and logistics centers.',
      type: 'industrial',
      imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className={`py-24 transition-colors duration-1000 ${mode === 'day' ? 'bg-[#1a1a1a]' : 'bg-[#0f0f0f]'}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header with Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h4 className="text-gold font-sans tracking-widest text-sm uppercase mb-2">Our Expertise</h4>
            <h2 className="font-display text-4xl md:text-5xl text-white">Tailored Solutions</h2>
          </div>

          <div className="flex items-center gap-4 bg-midnight border border-white/10 p-2 rounded-full">
            <button
              onClick={() => setMode('day')}
              className={`p-3 rounded-full transition-all duration-300 ${mode === 'day' ? 'bg-gold text-midnight' : 'text-gray-500 hover:text-white'}`}
            >
              <Sun className="w-5 h-5" />
            </button>
            <span className="text-xs font-sans tracking-widest text-gray-500 uppercase">
              {mode === 'day' ? 'Generation Mode' : 'Storage Mode'}
            </span>
            <button
              onClick={() => setMode('night')}
              className={`p-3 rounded-full transition-all duration-300 ${mode === 'night' ? 'bg-cyan text-midnight' : 'text-gray-500 hover:text-white'}`}
            >
              <Moon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[500px]">

          {/* Main Large Residential Tile (Span 8) */}
          <motion.div
            className="md:col-span-8 relative group overflow-hidden border border-white/5 cursor-pointer bg-midnight"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
                alt="Residential"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-12 z-10 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="font-display text-4xl text-white mb-2 tracking-tight">{services[0].title}</h3>
                  <div className="w-12 h-[1px] bg-gold mb-4"></div>
                  <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-4">{services[0].subtitle}</p>
                  <p className="text-gray-400 font-sans max-w-md text-sm leading-relaxed">{services[0].description}</p>
                </div>

                {/* Subtle Status Metric */}
                <div className="text-right hidden md:block">
                  <div className="text-3xl font-display text-white/90">
                    {mode === 'day' ? '12.4' : '98'}
                    <span className="text-sm font-sans text-gold ml-1">{mode === 'day' ? 'kW' : '%'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stacked Side Column (Span 4) */}
          <div className="md:col-span-4 grid grid-rows-2 gap-8 h-full">

            {/* Commercial Tile */}
            <motion.div
              className="relative group overflow-hidden border border-white/5 cursor-pointer bg-midnight"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 z-0">
                <img src={services[1].imageUrl} alt="Commercial" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 block grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-midnight/60 group-hover:bg-midnight/40 transition-colors duration-700"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="font-display text-2xl text-white mb-2">{services[1].title}</h3>
                <p className="text-gray-400 text-xs tracking-widest uppercase group-hover:text-gold transition-colors">{services[1].subtitle}</p>
              </div>
            </motion.div>

            {/* Industrial Tile */}
            <motion.div
              className="relative group overflow-hidden border border-white/5 cursor-pointer bg-midnight"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 z-0">
                <img src={services[2].imageUrl} alt="Industrial" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 block grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-midnight/60 group-hover:bg-midnight/40 transition-colors duration-700"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="font-display text-2xl text-white mb-2">{services[2].title}</h3>
                <p className="text-gray-400 text-xs tracking-widest uppercase group-hover:text-gold transition-colors">{services[2].subtitle}</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Stats / Info Tile */}
        <motion.div className="md:col-span-2 bg-midnight/50 border border-white/5 rounded-xl p-8 flex flex-col justify-center">
          <h3 className="font-display text-2xl text-white mb-6">System Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-display text-gold mb-1">25<span className="text-lg">yrs</span></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Warranty</div>
            </div>
            <div>
              <div className="text-4xl font-display text-cyan mb-1">92<span className="text-lg">%</span></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Efficiency at 25 yrs</div>
            </div>
            <div>
              <div className="text-4xl font-display text-white mb-1">24<span className="text-lg">/7</span></div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Monitoring</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;