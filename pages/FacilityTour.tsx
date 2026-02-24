import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const FacilityTour: React.FC = () => {
    return (
        <>
            <PageHeader title="Virtual Facility Tour" subtitle="Step inside our 2.5 GW automated Gigafactory." image="https://images.unsplash.com/photo-1565439399-bb6e4f3deae6?q=80&w=2670&auto=format&fit=crop" />

            <Section>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-primary mb-6">Fully Automated. Highly Intelligent.</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Witness the pinnacle of modern solar manufacturing. Our newly commissioned facility utilizes AGVs (Automated Guided Vehicles), extreme clean-room protocols, and end-to-end robotic assembly lines.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-900 shadow-2xl overflow-hidden group mb-16"
                >
                    {/* Placeholder for actual facility video */}
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop" alt="Factory Floor" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button title="Play Virtual Tour" className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full text-white hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 hover:scale-110">
                            <Play className="h-10 w-10 ml-2" />
                        </button>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { metric: '2.5 GW', label: 'Annual Capacity' },
                        { metric: '99.9%', label: 'Automation Level' },
                        { metric: 'ISO Class 6', label: 'Clean Room Standards' }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-50 border border-gray-100 p-8 text-center"
                        >
                            <h3 className="text-4xl font-bold text-secondary mb-2">{item.metric}</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default FacilityTour;
