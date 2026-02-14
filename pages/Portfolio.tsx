import React from 'react';
import { Section, PageHeader } from '../components/UIComponents';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  { id: '1', title: 'Atacama Solar Park', location: 'Chile', capacity: '120 MW', output: '250 GWh/yr', category: 'Utility', image: 'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=2669&auto=format&fit=crop' },
  { id: '2', title: 'Bavaria Industrial Roof', location: 'Germany', capacity: '5 MW', output: '5.5 GWh/yr', category: 'C&I', image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2670&auto=format&fit=crop' },
  { id: '3', title: 'Sahara Hybrid Plant', location: 'Morocco', capacity: '50 MW + 20MWh', output: 'Hybrid', category: 'Storage', image: 'https://images.unsplash.com/photo-1545209463-eb56d787037e?q=80&w=2670&auto=format&fit=crop' },
  { id: '4', title: 'Texas Grid Storage', location: 'USA', capacity: '100 MWh', output: 'Grid Support', category: 'Storage', image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop' },
];

const Portfolio: React.FC = () => {
  return (
    <>
      <PageHeader title="Success Stories" subtitle="Powering the world, one project at a time." image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop" />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
             <div key={project.id} className="group relative h-[400px] overflow-hidden cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity p-8 flex flex-col justify-end">
                   <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                   <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                   <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                   
                   <div className="grid grid-cols-2 border-t border-gray-600 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <div>
                        <span className="block text-gray-400 text-xs uppercase">Capacity</span>
                        <span className="text-white font-bold">{project.capacity}</span>
                      </div>
                      <div>
                        <span className="block text-gray-400 text-xs uppercase">Output</span>
                        <span className="text-white font-bold">{project.output}</span>
                      </div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Portfolio;