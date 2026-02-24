import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, Server } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Utility-Scale (Container ESS)',
        desc: 'Massive energy reserves for grid stabilization and solar farms. Up to 3.7MWh per 20ft container.',
        icon: Server,
        link: '/products/batteries/aes-ess-container',
        image: '/images/homepage_hero_desktop_1771580991310.png'
    },
    {
        title: 'Commercial & Industrial (Cabinet ESS)',
        desc: 'Modular, liquid-cooled 215kWh cabinets designed for peaker plant replacement and commercial backup.',
        icon: Server,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/inverter_central_1771581042359.png'
    },
    {
        title: 'Residential Storage',
        desc: 'Stackable, intelligent LFP batteries for whole-home backup and energy independence.',
        icon: Battery,
        link: '/contact', // Placeholder until detail page exists
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2944&auto=format&fit=crop'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'bat-mega',
        name: 'AES-MegaBlock 3.7MWh',
        marketEquivalent: 'Tesla Megapack / Sungrow PowerTitan',
        specs: [
            { label: 'Capacity', value: '3.72 MWh' },
            { label: 'Cell Type', value: 'LFP (Lithium Iron Phosphate)' },
            { label: 'Cooling', value: 'Liquid Cooled' },
            { label: 'Cycle Life', value: '10,000+ Cycles' },
        ],
        description: 'Massive, scalable energy storage for utility projects. Delivered pre-assembled in an IP55 rated enclosure for immediate grid connection.',
        image: '/images/homepage_hero_desktop_1771580991310.png',
        link: '/products/batteries/aes-ess-container'
    },
    {
        id: 'bat-cni',
        name: 'AES-Cabinet ESS 215kWh',
        marketEquivalent: 'Huawei LUNA2000 C&I / BYD CHESS',
        specs: [
            { label: 'Capacity', value: '215 kWh' },
            { label: 'Scalability', value: 'Up to 10 Units Series' },
            { label: 'Safety', value: 'Aerosol Fire Suppression' },
            { label: 'Footprint', value: 'Compact Outdoor' },
        ],
        description: 'The ultimate commercial backup and peak-shaving solution. Modular design allows for precise capacity scaling to match facility needs.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/contact'
    },
    {
        id: 'bat-res',
        name: 'AES-PowerWall 10kWh',
        marketEquivalent: 'Tesla Powerwall / LG Chem RESU',
        specs: [
            { label: 'Capacity', value: '10.2 kWh' },
            { label: 'Continuous Output', value: '5 kW' },
            { label: 'Design', value: 'Wall-Mounted' },
            { label: 'Chemistry', value: 'Safe LFP Technology' },
        ],
        description: 'Reliable residential backup. Ensures critical loads remain powered during outages and maximizes solar self-consumption.',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2944&auto=format&fit=crop',
        link: '/contact'
    }
];

const BatteriesHub: React.FC = () => {
    return (
        <>
            <PageHeader title="Energy Storage Systems" subtitle="Next-generation LFP batteries built for safety and unyielding power." image="/images/homepage_hero_desktop_1771580991310.png" />

            <Section>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Storage Categories</h2>
                    <p className="text-muted text-lg">
                        Our multi-GW facility produces advanced energy storage systems integrated with proprietary AI-driven Battery Management Systems to ensure maximum lifecycle and thermal stability.
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
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Flagship Storage Systems</h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">AI-managed LFP battery modules built for grid stability and deep cycle life.</p>
                    </div>

                    <ProductPager categoryTitle="Energy Storage Portfolio" products={pagerProducts} />
                </div>
            </Section>
        </>
    );
};

export default BatteriesHub;
// NOTE need to add Database icon from lucide-react
