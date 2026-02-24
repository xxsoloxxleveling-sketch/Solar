import React from 'react';
import { Section, PageHeader, Button } from '../components/UIComponents';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ActivitySquare, Home } from 'lucide-react';
import { ProductPager, PagerProduct } from '../components/ProductPager';

const categories = [
    {
        title: 'Hybrid Inverters (Residential)',
        desc: 'The ultimate solution for load shedding. Manage grid, solar, and battery power seamlessly. Available in 3kW to 10kW models.',
        icon: Home,
        link: '/products/inverters/aes-8kw-hybrid',
        image: '/images/hybrid_inverter.png'
    },
    {
        title: 'String Inverters (Commercial & Residential)',
        desc: 'High-efficiency inverters (2kW-50kW) ideal for net-metering in local businesses, plazas, and large homes.',
        icon: ActivitySquare,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/inverter_central_1771581042359.png'
    },
    {
        title: 'Solar Pump Inverters',
        desc: 'Built specifically for Pakistan\'s agricultural sector. Run tube wells directly on solar without batteries.',
        icon: Zap,
        link: '/contact', // Placeholder until detail page exists
        image: '/images/inverter_central_1771581042359.png'
    }
];

const pagerProducts: PagerProduct[] = [
    {
        id: 'inv-hybrid-series',
        name: 'AES-Nitrox Hybrid Series (3kW - 10kW)',
        marketEquivalent: 'Inverex Nitrox / Growatt SPH',
        specs: [
            { label: 'Power Range', value: '3kW, 5kW, 8kW, 10kW' },
            { label: 'Net-Metering', value: 'Approved (NEPRA)' },
            { label: 'Battery Support', value: 'Lead Acid & Lithium (48V)' },
            { label: 'Overload', value: '200% Surge (10s)' },
        ],
        description: 'Designed specifically to combat load shedding in Pakistan. This intelligent hybrid inverter provides heavy-duty backup for essential loads while exporting excess power.',
        image: '/images/hybrid_inverter.png',
        link: '/products/inverters/aes-8kw-hybrid'
    },
    {
        id: 'inv-grid-series',
        name: 'AES-SunGrid Series (2kW - 10kW)',
        marketEquivalent: 'Huawei SUN2000 / Knox',
        specs: [
            { label: 'Power Range', value: '2kW, 3kW, 5kW, 10kW' },
            { label: 'Phase Options', value: 'Single & Three-Phase' },
            { label: 'Monitoring', value: 'WiFi/4G App' },
            { label: 'Efficiency', value: '98.5%' },
        ],
        description: 'The perfect string inverter for net-metering applications. Optimized for safe, reliable grid export with advanced arc-fault protection and smart monitoring.',
        image: '/images/inverter_central_1771581042359.png',
        link: '/contact'
    },
    {
        id: 'inv-pump',
        name: 'AES-AgriPump 15kW VFD',
        marketEquivalent: 'Veichi / INVT',
        specs: [
            { label: 'Motor Drive', value: '15 kW' },
            { label: 'Input', value: 'Solar Vmp Tracking' },
            { label: 'Protection', value: 'Dry Run / Overvoltage' },
            { label: 'Design', value: 'IP65 Dust/Water Resistant' },
        ],
        description: 'Empowering local farmers. A robust Variable Frequency Drive (VFD) designed to power tube wells efficiently, directly from solar panels without needing expensive batteries.',
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
