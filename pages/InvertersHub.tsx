import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ActivitySquare, Home } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Central Inverters (Utility Scale)',
        desc: 'High-capacity conversion designed to connect massive PV farms directly to the grid with max efficiency.',
        icon: ActivitySquare,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/inverter_central_1771581042359.png'
    },
    {
        title: 'String Inverters (C&I)',
        desc: 'Intelligent multi-MPPT string inverters with built-in AI Arc Fault detection. Up to 350kW output.',
        icon: Zap,
        link: '/products/inverters/aes-inv',
        image: '/images/inverter_central_1771581042359.png'
    },
    {
        title: 'Hybrid Inverters (Residential)',
        desc: 'Seamlessly manage PV generation, battery storage, and grid connection in one sleek unit.',
        icon: Home,
        link: '/contact', // Placeholder until detail page exists
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2916&auto=format&fit=crop'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'inv-sg',
        name: 'AES-SG Central 3.1MW',
        marketEquivalent: 'Sungrow SG Series / SMA Sunny Central',
        specs: [
            { label: 'Max Output', value: '3.125 MW' },
            { label: 'Max Efficiency', value: '99.0%' },
            { label: 'Cooling', value: 'Smart Forced Air' },
            { label: 'Grid Support', value: 'Q at Night, SCR > 1.2' },
        ],
        description: 'The workhorse of utility-scale solar. Featuring modular power blocks and advanced grid-forming capabilities.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/contact'
    },
    {
        id: 'inv-sun',
        name: 'AES-SUN Series 330K',
        marketEquivalent: 'Huawei SUN2000-330KTL',
        specs: [
            { label: 'Max Output', value: '330 kW' },
            { label: 'MPPTs', value: 'Up to 14' },
            { label: 'Protection', value: 'AI Arc Fault' },
            { label: 'Diagnostics', value: 'Smart I-V Curve' },
        ],
        description: 'Industry-leading string inverter for C&I. Maximizes energy harvest with ultra-high MPPT density and granular monitoring.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/products/inverters/aes-inv'
    },
    {
        id: 'inv-res',
        name: 'AES-Hybrid 10K',
        marketEquivalent: 'SolarEdge Energy Hub / Fronius GEN24',
        specs: [
            { label: 'Max Output', value: '10 kW' },
            { label: 'Battery Ready', value: 'Yes (DC-Coupled)' },
            { label: 'Backup Power', value: 'Whole Home EPS' },
            { label: 'Monitoring', value: 'Cloud App' },
        ],
        description: 'An all-in-one solution for residential energy independence, seamlessly managing solar generation, battery storage, and grid export.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/contact'
    }
];

const InvertersHub: React.FC = () => {
    return (
        <>
            <PageHeader title="Smart Inverters" subtitle="The brain behind maximum yield and intelligent grid integration." image="/images/inverter_central_1771581042359.png" />

            <Section>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Inverter Categories</h2>
                    <p className="text-muted text-lg">
                        Built with next-generation power electronics and AI diagnostics, our inverters guarantee 99%+ efficiency rates under the harshest desert and marine conditions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="bg-white group cursor-pointer border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img src={cat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={cat.title} />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-white p-3 shadow-md rounded-full">
                                        <Icon className="h-6 w-6 text-secondary" />
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-primary transition-colors">{cat.title}</h3>
                                    <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{cat.desc}</p>
                                    <Link to={cat.link} className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">
                                        Explore Series <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* Product Pager Section */}
            <Section background="grey">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Featured Inverters</h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">High-efficiency conversion platforms for every application scale.</p>
                    </div>

                    <ProductPager categoryTitle="Power Electronics Portfolio" products={pagerProducts} />
                </div>
            </Section>
        </>
    );
};

export default InvertersHub;
