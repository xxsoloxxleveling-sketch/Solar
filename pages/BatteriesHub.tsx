import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, Server } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Wall-Mounted (Residential)',
        desc: 'Sleek, space-saving LiFePO4 batteries designed to integrate seamlessly into your home. Available in 5kWh to 10kWh+ units.',
        icon: Battery,
        link: '/products/batteries/aes-powerwall',
        image: '/images/powerwall_battery.png'
    },
    {
        title: 'Server Rack (Modular)',
        desc: 'Scalable 48V modules (2.4kWh to 5kWh) perfect for homes and small businesses needing robust, expandable backup.',
        icon: Server,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/inverter_central_1771581042359.png'
    },
    {
        title: 'High-Voltage Stackable',
        desc: 'Advanced C&I storage solutions for maximum efficiency and capacity expansion.',
        icon: Zap,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/homepage_hero_desktop_1771580991310.png'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'bat-wall-series',
        name: 'AES-PowerWall Series (5kWh - 10kWh)',
        marketEquivalent: 'Pylontech / BYD Battery-Box',
        specs: [
            { label: 'Capacity Options', value: '5.12 kWh & 10.24 kWh' },
            { label: 'Cell Type', value: 'LiFePO4 (Grade A+)' },
            { label: 'Cycle Life', value: '6,000+ Cycles @ 80% DoD' },
            { label: 'Design', value: 'Wall-Mounted Ultra Slim' },
        ],
        description: 'The premier choice for Pakistani households seeking reliable backup against load shedding. Available in multiple capacities to fit any home size.',
        image: '/images/powerwall_battery.png',
        link: '/products/batteries/aes-powerwall'
    },
    {
        id: 'bat-rack',
        name: 'AES-RackBlade Series',
        marketEquivalent: 'Narada / Knox / Topak',
        specs: [
            { label: 'Module Sizes', value: '2.4 kWh, 4.8 kWh, 5.12 kWh' },
            { label: 'Scalability', value: 'Up to 15 Units in Parallel' },
            { label: 'BMS', value: 'Intelligent AI-Driven BMS' },
            { label: 'Installation', value: 'Standard 19" Server Rack' },
        ],
        description: 'Highly modular and cost-effective. Start small and expand your storage as your energy needs grow. Fully compatible with top hybrid inverter brands.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/contact'
    },
    {
        id: 'bat-cni',
        name: 'AES-Stack C&I 50kWh',
        marketEquivalent: 'Huawei LUNA / Sungrow',
        specs: [
            { label: 'Capacity', value: '50 kWh' },
            { label: 'Voltage', value: 'High Voltage (HV)' },
            { label: 'Cooling', value: 'Smart Thermal Management' },
            { label: 'Footprint', value: 'Compact Stackable' },
        ],
        description: 'Powerful backup for commercial plazas and industrial units. Reduces reliance on diesel generators and maximizes solar self-consumption.',
        image: '/images/homepage_hero_desktop_1771580991310.png',
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
