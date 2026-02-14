import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Industrial: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen pt-20"
        >
            <SEO
                title="Industrial Solar Power Systems"
                description="Mega-watt scale industrial solar power systems for manufacturing and logistics centers. Expert EPC solar contractor."
                keywords="industrial solar power systems, large scale solar installation, factory solar solutions"
            />
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1600"
                        alt="Industrial Solar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <h4 className="text-gold font-sans tracking-[0.3em] text-sm uppercase mb-4">Utility-Scale Power</h4>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Industrial Systems</h1>
                        <p className="text-gray-300 font-sans max-w-2xl text-lg leading-relaxed">
                            Mega-watt scale solutions for manufacturing and logistics centers, powering heavy infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-midnight py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl text-white mb-8 text-center">Powering Infrastructure</h2>
                    <p className="text-gray-400 font-sans leading-loose mb-12 text-center">
                        Industrial complexes require massive amounts of reliable power. Our grid-interactive systems ensure stability while dramatically cutting overhead costs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-white mb-4">High Voltage Interconnection</h3>
                            <p className="text-sm text-gray-400 font-sans">Expert handling of medium and high voltage grid connections.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-white mb-4">O&M Contracts</h3>
                            <p className="text-sm text-gray-400 font-sans">Dedicated operations and maintenance teams to ensure max uptime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Industrial;
