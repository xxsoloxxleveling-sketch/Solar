import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Commercial: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen pt-20"
        >
            <SEO
                title="Commercial Solar Installation"
                description="Strategic commercial solar installation solutions that reduce operating costs and showcase your commitment to a green future."
                keywords="commercial solar installation, solar for office buildings, business solar solutions"
            />
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
                        alt="Commercial Solar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <h4 className="text-gold font-sans tracking-[0.3em] text-sm uppercase mb-4">Corporate Sustainability</h4>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Commercial Systems</h1>
                        <p className="text-gray-300 font-sans max-w-2xl text-lg leading-relaxed">
                            Strategic energy solutions that reduce operating costs and showcase your commitment to a green future.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-midnight py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-3xl text-white mb-8 text-center">ROI-Driven Energy</h2>
                    <p className="text-gray-400 font-sans leading-loose mb-12 text-center">
                        For businesses, solar is an investment. We optimize system size and placement to maximize tax incentives, depreciation benefits, and monthly savings.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-cyan mb-4">Peak Shaving</h3>
                            <p className="text-sm text-gray-400 font-sans">Reduce demand charges by deploying battery power during peak usage times.</p>
                        </div>
                        <div className="border border-white/10 p-8 rounded-sm bg-white/5">
                            <h3 className="text-xl font-display text-cyan mb-4">Carport Structures</h3>
                            <p className="text-sm text-gray-400 font-sans">Turn parking lots into power generating assets with shaded coverage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Commercial;
