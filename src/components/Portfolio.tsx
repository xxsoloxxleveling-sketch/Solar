import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'The Glass House',
      location: 'Malibu, CA',
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop',
      stats: { energySaved: '18 MWh/yr', co2Reduced: '12 Tons' }
    },
    {
      id: '2',
      title: 'Azure Tech Park',
      location: 'Austin, TX',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2301&auto=format&fit=crop',
      stats: { energySaved: '450 MWh/yr', co2Reduced: '310 Tons' }
    },
    {
      id: '3',
      title: 'Desert Oasis Villa',
      location: 'Palm Springs, CA',
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop',
      stats: { energySaved: '24 MWh/yr', co2Reduced: '16 Tons' }
    },
    {
      id: '4',
      title: 'Skyline Penthouse',
      location: 'New York, NY',
      imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop',
      stats: { energySaved: '12 MWh/yr', co2Reduced: '8 Tons' }
    },
    {
      id: '5',
      title: 'Eco-Resort',
      location: 'Tulum, Mexico',
      imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2940&auto=format&fit=crop',
      stats: { energySaved: '120 MWh/yr', co2Reduced: '85 Tons' }
    }
  ];

  return (
    <div className="py-32 bg-midnight">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <div>
            <h4 className="text-gold font-sans tracking-[0.3em] text-xs uppercase mb-4">Our Legacy</h4>
            <h2 className="font-display text-5xl md:text-7xl text-white">Selected Works</h2>
          </div>
          <div className="hidden md:block max-w-sm text-right">
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              A curation of architectural energy systems deployed across the globe.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer ${idx === 1 || idx === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] w-full mb-6">
                {/* Gold Overlay Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20 origin-left"></div>

                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                />

                {/* Hover Overlay with Stats */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                    <div className="flex gap-12">
                      <div>
                        <div className="text-gold text-2xl font-display">{project.stats.energySaved}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Generated</div>
                      </div>
                      <div>
                        <div className="text-white text-2xl font-display">{project.stats.co2Reduced}</div>
                        <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Carbon Offset</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start border-t border-white/10 pt-6 group-hover:border-white/30 transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-display text-white mb-1 group-hover:text-gold transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-500 font-sans tracking-widest uppercase text-xs">{project.location}</p>
                </div>
                <ArrowUpRight className="text-gray-600 w-6 h-6 group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;