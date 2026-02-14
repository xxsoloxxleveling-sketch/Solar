import React, { useState } from 'react';
import { Section, PageHeader, Button, Card } from '../components/UIComponents';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Check, X, ArrowRight } from 'lucide-react';

const products: Product[] = [
  { id: 'p1', name: 'AES-550 Pro', category: 'panels', description: '550W Bifacial Mono-PERC Module', specs: { efficiency: '21.5%', warranty: '25 Years', type: 'Monocrystalline' }, image: 'https://images.unsplash.com/photo-1592833159057-65a2845730bd?q=80&w=2600&auto=format&fit=crop', link: '/products/panels' },
  { id: 'p2', name: 'AES-700 Ultra', category: 'panels', description: '700W N-Type TOPCon Module', specs: { efficiency: '22.8%', warranty: '30 Years', type: 'N-Type TOPCon' }, image: 'https://images.unsplash.com/photo-1559302995-f9d2dc2e59df?q=80&w=2508&auto=format&fit=crop', link: '/products/panels' },
  { id: 'i1', name: 'Hybrid-10K', category: 'inverters', description: '10kW Three-Phase Hybrid Inverter', specs: { efficiency: '98.2%', warranty: '10 Years', type: 'Hybrid' }, image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2574&auto=format&fit=crop', link: '/products/inverters' },
  { id: 'b1', name: 'PowerWall-5', category: 'batteries', description: '5kWh LFP Battery Module', specs: { efficiency: '95%', warranty: '10 Years', type: 'LiFePO4' }, image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2671&auto=format&fit=crop', link: '/products/batteries' },
];

const Products: React.FC = () => {
  const [compareList, setCompareList] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter(item => item !== id));
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, id]);
      }
    }
  };

  const getProduct = (id: string) => products.find(p => p.id === id);

  return (
    <>
      <PageHeader title="Our Products" subtitle="Comprehensive energy solutions for residential, commercial, and utility applications." image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2574&auto=format&fit=crop" />

      {/* Comparison Modal/Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 p-4 border-t border-gray-200 transform animate-slide-up">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex gap-4">
              {compareList.map(id => {
                const p = getProduct(id);
                return (
                  <div key={id} className="bg-gray-100 px-4 py-2 rounded-sm flex items-center gap-2">
                    <span className="font-bold text-sm text-primary">{p?.name}</span>
                    <button onClick={() => toggleCompare(id)} className="text-gray-400 hover:text-red-500"><X className="h-4 w-4" /></button>
                  </div>
                );
              })}
            </div>
            {compareList.length === 2 && (
              <div className="flex gap-8 text-sm">
                <div className="hidden md:block">
                  <span className="text-muted block text-xs">Efficiency</span>
                  <span className="font-bold">{getProduct(compareList[0])?.specs.efficiency} vs {getProduct(compareList[1])?.specs.efficiency}</span>
                </div>
                <div className="hidden md:block">
                  <span className="text-muted block text-xs">Warranty</span>
                  <span className="font-bold">{getProduct(compareList[0])?.specs.warranty} vs {getProduct(compareList[1])?.specs.warranty}</span>
                </div>
              </div>
            )}
            <div className="text-xs text-muted">
              {compareList.length < 2 ? 'Select one more to compare' : 'Comparison Active'}
            </div>
          </div>
        </div>
      )}

      <Section>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Header Card */}
          <div className="md:col-span-2 bg-primary text-white p-10 flex flex-col justify-center items-start">
            <h2 className="text-4xl font-heading font-bold mb-4">Integrated Energy Ecosystem</h2>
            <p className="text-blue-100 max-w-lg mb-8">From capturing sunlight to storing energy and managing the grid, our product suite is designed for seamless integration and maximum yield.</p>
            <div className="flex gap-4 flex-wrap">
               <span className="border border-blue-400 px-3 py-1 text-sm rounded-full">Utility Scale</span>
               <span className="border border-blue-400 px-3 py-1 text-sm rounded-full">C&I Rooftop</span>
               <span className="border border-blue-400 px-3 py-1 text-sm rounded-full">Residential</span>
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="group relative bg-white border border-gray-100 hover:border-secondary transition-colors overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-1/2 object-cover" />
              <div className="p-6 h-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted">{product.description}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <Link to={product.link} className="text-primary font-bold text-sm border-b border-primary hover:text-blue-800">
                    View Details
                  </Link>
                  <button 
                    onClick={() => toggleCompare(product.id)}
                    className={`text-sm px-3 py-1 border transition-colors ${compareList.includes(product.id) ? 'bg-secondary border-secondary text-white' : 'border-gray-200 text-gray-500 hover:border-secondary'}`}
                  >
                    {compareList.includes(product.id) ? 'Selected' : 'Compare'}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Block */}
          <Link to="/contact" className="bg-gray-900 text-white p-8 flex flex-col justify-center items-center text-center group">
            <h3 className="text-2xl font-heading font-bold mb-4">Need Custom OEM?</h3>
            <p className="text-gray-400 text-sm mb-6">We offer white-label manufacturing services for global brands.</p>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Products;