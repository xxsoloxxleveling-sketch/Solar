import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Residential: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen pt-20"
        >
            <SEO
                title="Residential Solar Panel Installation"
                description="Custom-designed solar arrays for luxury homes. We provide residential solar panel installation that integrates seamlessly with your architecture."
                keywords="residential solar panel installation, home solar system, rooftop solar panels"
            />
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
                        alt="Residential Solar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <h4 className="text-gold font-sans tracking-[0.3em] text-sm uppercase mb-4">Energy Independence</h4>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Residential Systems</h1>
                        <p className="text-gray-300 font-sans max-w-2xl text-lg leading-relaxed">
                            Custom-designed solar arrays for luxury homes, integrated seamlessly with architecture to provide autonomy and elegance.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-midnight py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl text-white mb-8 text-center">Engineered for Aesthetics</h2>
                    <p className="text-gray-400 font-sans leading-loose mb-12 text-center">
                        Our residential solutions go beyond simple panel installation. We analyze your home's geometry, local shading patterns, and energy consumption profile to design a system that performs flawlessly while enhancing your property's visual appeal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-gold mb-4">Black-on-Black Panels</h3>
                            <p className="text-sm text-gray-400 font-sans">Sleek, all-black modules that blend with modern roofing materials.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-gold mb-4">Smart Battery Backup</h3>
                            <p className="text-sm text-gray-400 font-sans">Seamless power transition during grid outages with integrated storage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Residential;
